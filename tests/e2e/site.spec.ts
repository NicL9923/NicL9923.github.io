import { expect, test, type Page } from '@playwright/test';
import { navSections } from '../../src/lib/navigation';

const trackErrors = (page: Page) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  return errors;
};

// Normalizes any CSS color, including oklch(), to rgb() so values compare.
const toRgb = (page: Page, color: string) =>
  page.evaluate((value) => {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('No 2D canvas context');
    context.fillStyle = value;
    context.fillRect(0, 0, 1, 1);
    const [r, g, b] = context.getImageData(0, 0, 1, 1).data;
    return `rgb(${r}, ${g}, ${b})`;
  }, color);

const readTheme = async (page: Page) => {
  const { isDark, body, meta } = await page.evaluate(() => ({
    isDark: document.documentElement.classList.contains('dark'),
    body: getComputedStyle(document.body).backgroundColor,
    meta:
      document
        .querySelector('meta[name="theme-color"]')
        ?.getAttribute('content') ?? 'missing',
  }));
  return {
    isDark,
    body: await toRgb(page, body),
    meta: await toRgb(page, meta),
  };
};

test.describe('static HTML', () => {
  test('ships the page content and every nav target before JavaScript runs', async ({
    request,
  }) => {
    const html = await (await request.get('/')).text();

    expect(html).toMatch(/<h1[^>]*>/);
    for (const { href } of navSections) {
      expect(html).toContain(`id="${href.slice(1)}"`);
    }
  });

  test('renders readable content with JavaScript disabled', async ({
    browser,
  }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
    await context.close();
  });
});

test.describe('theme', () => {
  const cases = [
    { system: 'dark', saved: null, dark: true },
    { system: 'light', saved: null, dark: false },
    { system: 'dark', saved: 'light', dark: false },
    { system: 'light', saved: 'dark', dark: true },
  ] as const;

  for (const { system, saved, dark } of cases) {
    test(`paints ${dark ? 'dark' : 'light'} before the bundle loads (system ${system}, saved ${saved ?? 'none'})`, async ({
      page,
    }) => {
      await page.emulateMedia({ colorScheme: system });
      if (saved) {
        await page.addInitScript(
          (theme) => localStorage.setItem('theme', theme),
          saved
        );
      }
      // Block the bundle so only inline HTML and CSS decide the first paint.
      await page.route('**/*.js', (route) => route.abort());
      await page.goto('/');

      const theme = await readTheme(page);
      expect(theme.isDark).toBe(dark);
      expect(theme.body).toBe(dark ? 'rgb(13, 17, 23)' : 'rgb(255, 255, 255)');
      // The browser chrome color must match the page, not a fixed value.
      expect(theme.meta).toBe(theme.body);
    });
  }

  test('toggle switches theme and keeps the browser chrome color in sync', async ({
    page,
  }) => {
    const errors = trackErrors(page);
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');

    await page.getByRole('button', { name: 'Switch to dark mode' }).click();
    await expect(page.locator('html')).toHaveClass(/\bdark\b/);
    await expect(
      page.getByRole('button', { name: 'Switch to light mode' })
    ).toBeVisible();
    await expect
      .poll(async () => (await readTheme(page)).meta)
      .toBe('rgb(13, 17, 23)');
    expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe(
      'dark'
    );
    expect(errors).toEqual([]);
  });
});

test('hydrates without errors', async ({ page }) => {
  const errors = trackErrors(page);
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  // A working theme toggle proves React attached to the prerendered markup.
  await page.getByRole('heading', { level: 1 }).waitFor();
  await page.getByRole('button', { name: 'Switch to dark mode' }).click();
  await expect(page.locator('html')).toHaveClass(/\bdark\b/);
  expect(errors).toEqual([]);
});

test('still works when the browser blocks storage', async ({ page }) => {
  const errors = trackErrors(page);
  await page.addInitScript(() => {
    for (const name of ['localStorage', 'sessionStorage']) {
      Object.defineProperty(window, name, {
        get() {
          throw new DOMException('Access is denied', 'SecurityError');
        },
      });
    }
  });
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');

  await page.getByRole('button', { name: 'Switch to dark mode' }).click();
  await expect(page.locator('html')).toHaveClass(/\bdark\b/);
  expect(errors).toEqual([]);
});

test.describe('boot sequence', () => {
  test.use({ reducedMotion: 'no-preference' });

  test('plays once per session', async ({ page }) => {
    await page.goto('/');
    const toast = page.getByText('Loading profile...');
    await expect(toast).toBeAttached();
    await expect(toast).not.toBeAttached();

    await page.reload();
    await page.waitForLoadState('networkidle');
    // The toast would mount right after hydration; give it time to appear.
    await page.waitForTimeout(500);
    await expect(toast).not.toBeAttached();
  });
});

const isMenuOpen = (page: Page) =>
  page
    .locator('details')
    .evaluate((node) => node instanceof HTMLDetailsElement && node.open);

test.describe('mobile navigation', () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true });

  test('lists every section', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sections').click();
    const links = page.getByRole('navigation', { name: 'Mobile navigation' });

    await expect(links.getByRole('link')).toHaveText(
      navSections.map(({ label }) => label)
    );
  });

  test('closes on Escape and returns focus to the toggle', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sections').click();
    await page
      .getByRole('navigation', { name: 'Mobile navigation' })
      .getByRole('link')
      .first()
      .focus();

    await page.keyboard.press('Escape');

    expect(await isMenuOpen(page)).toBe(false);
    await expect(page.locator('summary')).toBeFocused();
  });

  test('closes when the user taps outside it', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sections').click();
    expect(await isMenuOpen(page)).toBe(true);

    await page.getByRole('heading', { level: 1 }).tap();

    await expect.poll(() => isMenuOpen(page)).toBe(false);
  });

  test('closes and navigates when a section is chosen', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sections').click();
    await page
      .getByRole('navigation', { name: 'Mobile navigation' })
      .getByRole('link', { name: 'Contact' })
      .click();

    await expect(page).toHaveURL(/#contact$/);
    expect(await isMenuOpen(page)).toBe(false);
  });
});

test('desktop navigation lists every section', async ({ page }) => {
  await page.goto('/');
  await expect(
    page
      .getByRole('navigation', { name: 'Primary navigation' })
      .getByRole('link')
  ).toHaveText(navSections.map(({ label }) => label));
});

for (const width of [390, 1280]) {
  test(`keeps "End-to-end" on one line in the headline at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');

    const lineTops = await page
      .getByRole('heading', { level: 1 })
      .evaluate((heading) => {
        const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
          const start = node.textContent?.indexOf('End-to-end') ?? -1;
          if (start < 0) continue;
          const range = document.createRange();
          range.setStart(node, start);
          range.setEnd(node, start + 'End-to-end'.length);
          return [...range.getClientRects()].map((rect) =>
            Math.round(rect.top)
          );
        }
        return [];
      });

    expect(lineTops.length).toBeGreaterThan(0);
    expect(new Set(lineTops).size).toBe(1);
  });
}
