# Nicolas Layne | Portfolio

An overview of my career of building things

## Tech Stack

- **Framework**: React 19 with TypeScript 7
- **Build Tool**: Vite 8
- **UI Library**: shadcn/ui + Tailwind CSS
- **Code Quality**: Oxlint, Oxfmt, Husky

## Development

Use Node.js 24.22.2 or later in the 24 line, or 26.13.0 or later in the 26 line. Run `npm ci`, then `npm run lint` and `npm run build`. The build invokes the TypeScript 7 compiler directly. Oxlint provides type-aware checks and the React Compiler correctness rules.

## Deployment

Automatic! Push to `main` and GitHub Actions builds and deploys to GitHub Pages.
