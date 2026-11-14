import type { Page } from '@playwright/test';

export interface ContrastFailure {
  selector: string;
  ratio: number;
  required: number;
}

type Rgb = [number, number, number];

/**
 * axe cannot judge text over gradients, translucent layers, or images and
 * reports those nodes as "incomplete". This measures them from pixels: read
 * each element's text color, hide all text on the page, screenshot the area
 * behind each line of the element, and take the worst contrast between the
 * text color and any background pixel there.
 */
export async function measureContrast(
  page: Page,
  selectors: string[]
): Promise<ContrastFailure[]> {
  // Read colors before hiding text, since hiding overrides the color.
  const targets = await Promise.all(
    selectors.map(async (selector) => ({
      selector,
      ...(await page
        .locator(selector)
        .first()
        .evaluate((node) => {
          const style = getComputedStyle(node);
          const canvas = document.createElement('canvas');
          canvas.width = canvas.height = 1;
          const context = canvas.getContext('2d');
          if (!context) throw new Error('No 2D canvas context');
          context.fillStyle = style.color;
          context.fillRect(0, 0, 1, 1);
          const [r, g, b] = context.getImageData(0, 0, 1, 1).data;
          return {
            foreground: [r, g, b] as Rgb,
            fontSize: parseFloat(style.fontSize),
            fontWeight: Number(style.fontWeight),
          };
        })),
    }))
  );

  // Hiding every glyph keeps neighboring lines out of the sampled background.
  const hideText = await page.addStyleTag({
    content:
      '* { color: transparent !important; -webkit-text-fill-color: transparent !important; text-shadow: none !important; }',
  });

  const failures: ContrastFailure[] = [];
  try {
    for (const target of targets) {
      const boxes = await page
        .locator(target.selector)
        .first()
        .evaluate((node) => {
          node.scrollIntoView({ block: 'center', inline: 'nearest' });
          const style = getComputedStyle(node);
          const isInline = style.display === 'inline';
          // Inline text: one box per line fragment. Blocks: the content box.
          const rects = isInline
            ? [...node.getClientRects()]
            : [node.getBoundingClientRect()];
          const edge = (side: 'Top' | 'Right' | 'Bottom' | 'Left') =>
            isInline
              ? 0
              : parseFloat(style.getPropertyValue(`border-${side}-width`)) +
                parseFloat(style.getPropertyValue(`padding-${side}`));
          return rects
            .map((rect) => {
              const x = Math.max(0, rect.left + edge('Left'));
              const y = Math.max(0, rect.top + edge('Top'));
              return {
                x,
                y,
                width:
                  Math.min(window.innerWidth, rect.right - edge('Right')) - x,
                height:
                  Math.min(window.innerHeight, rect.bottom - edge('Bottom')) -
                  y,
              };
            })
            .filter((box) => box.width >= 1 && box.height >= 1);
        });

      let worst = Infinity;
      for (const clip of boxes) {
        const image = await page.screenshot({ clip });
        worst = Math.min(
          worst,
          await worstContrast(page, image, target.foreground)
        );
      }

      // WCAG large text: at least 24px, or at least 18.66px and bold.
      const isLarge =
        target.fontSize >= 24 ||
        (target.fontSize >= 18.66 && target.fontWeight >= 700);
      const required = isLarge ? 3 : 4.5;
      if (worst < required) {
        failures.push({
          selector: target.selector,
          ratio: Math.round(worst * 100) / 100,
          required,
        });
      }
    }
  } finally {
    await hideText.evaluate((node) => node.parentNode?.removeChild(node));
  }

  return failures;
}

const worstContrast = (page: Page, image: Buffer, foreground: Rgb) =>
  page.evaluate(
    async ({ base64, fgColor }) => {
      const img = new Image();
      img.src = `data:image/png;base64,${base64}`;
      await img.decode();
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const context = canvas.getContext('2d');
      if (!context) throw new Error('No 2D canvas context');
      context.drawImage(img, 0, 0);
      const { data } = context.getImageData(0, 0, img.width, img.height);

      // oxlint-disable-next-line unicorn/consistent-function-scoping -- page.evaluate serializes only this callback, so helpers must live inside it.
      const luminance = (r: number, g: number, b: number) => {
        const [lr, lg, lb] = [r, g, b].map((value) => {
          const c = value / 255;
          return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
        });
        return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
      };
      const fg = luminance(...fgColor);

      let worst = Infinity;
      for (let i = 0; i < data.length; i += 4) {
        const bg = luminance(data[i], data[i + 1], data[i + 2]);
        worst = Math.min(
          worst,
          (Math.max(fg, bg) + 0.05) / (Math.min(fg, bg) + 0.05)
        );
      }
      return worst;
    },
    { base64: image.toString('base64'), fgColor: foreground }
  );
