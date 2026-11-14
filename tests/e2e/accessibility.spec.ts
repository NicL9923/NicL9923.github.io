import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { measureContrast } from './contrast';

const viewports = [
  { name: 'desktop', width: 1280, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
] as const;

for (const colorScheme of ['light', 'dark'] as const) {
  for (const viewport of viewports) {
    test(`has no WCAG 2.2 AA violations in ${colorScheme} mode on ${viewport.name}`, async ({
      page,
    }) => {
      await page.emulateMedia({ colorScheme });
      await page.setViewportSize(viewport);
      await page.goto('/');
      await expect(page.locator('html')).toHaveClass(
        colorScheme === 'dark' ? /\bdark\b/ : /\blight\b/
      );

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();

      expect(
        results.violations.map((violation) => ({
          rule: violation.id,
          targets: violation.nodes.map((node) => node.target.join(' ')),
        }))
      ).toEqual([]);

      // Text over gradients and translucent cards, which axe skips.
      const unresolved = results.incomplete
        .filter((result) => result.id === 'color-contrast')
        .flatMap((result) =>
          result.nodes.map((node) => String(node.target[0]))
        );
      expect(await measureContrast(page, unresolved)).toEqual([]);
    });
  }
}
