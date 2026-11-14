import { expect, test } from '@playwright/test';
import { measureContrast } from './contrast';

// The helper is the gate for text axe cannot judge, so it must see the
// color the user sees, including translucency from alpha and opacity.
test.describe('measureContrast', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <body style="margin:0;background:#fff;font:16px sans-serif">
        <p id="solid" style="color:#000">Solid black text</p>
        <p id="rgba" style="color:rgba(0,0,0,0.1)">Faint by alpha</p>
        <div style="opacity:0.1"><p id="opacity" style="color:#000">Faint by ancestor opacity</p></div>
      </body>`);
  });

  test('passes opaque text with enough contrast', async ({ page }) => {
    expect(await measureContrast(page, ['#solid'])).toEqual([]);
  });

  for (const id of ['rgba', 'opacity']) {
    test(`fails text made faint by ${id}`, async ({ page }) => {
      const [failure] = await measureContrast(page, [`#${id}`]);
      expect(failure).toMatchObject({ selector: `#${id}`, required: 4.5 });
      expect(failure.ratio).toBeLessThan(1.5);
    });
  }
});
