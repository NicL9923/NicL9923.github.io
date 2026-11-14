# Nicolas Layne | Portfolio

An overview of my career of building things

## Tech Stack

- **Framework**: React 19 with TypeScript 7
- **Build Tool**: Vite 8
- **UI Library**: shadcn/ui + Tailwind CSS
- **Code Quality**: Oxlint, Oxfmt, Husky

## Development

Use Node.js 24.22.2 or later in the 24 line, or 26.13.0 or later in the 26 line. Run `npm ci`, then `npm run lint` and `npm test`. Oxlint provides type-aware checks and the React Compiler correctness rules.

`npm run build` type-checks with the TypeScript 7 compiler, builds the client, then prerenders the page into `dist/index.html` with `scripts/prerender.ts`. Crawlers, link previews, and visitors without JavaScript get the full content, and the browser hydrates it. `npm run dev` skips the prerender and renders on the client.

`npm test` builds, then runs the Playwright suite in `tests/e2e` against `vite preview` on port 4391. It covers the static HTML, theme handling, navigation, and an axe WCAG 2.2 AA scan in both themes at desktop and mobile widths. The scan also measures contrast from pixels for text axe cannot judge, such as text on gradients. Run `npx playwright install chromium` once first.

## Deployment

Pull requests run formatting, lint, build, and the Playwright suite. A push to `main` runs the same checks, then deploys to GitHub Pages.
