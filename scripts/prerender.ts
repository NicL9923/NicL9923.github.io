// Renders the app to static HTML after `vite build` so crawlers, link
// previews, and no-JS visitors get the full page. The client hydrates it.
import { readFile, rm, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const htmlFile = new URL('dist/index.html', root);
const ssrDir = new URL('dist-ssr/', root);
const marker = '<!--app-html-->';

const serverEntry: unknown = await import(
  new URL('entry-server.js', ssrDir).href
);
if (
  typeof serverEntry !== 'object' ||
  serverEntry === null ||
  !('render' in serverEntry) ||
  typeof serverEntry.render !== 'function'
) {
  throw new Error('dist-ssr/entry-server.js does not export render()');
}

const template = await readFile(htmlFile, 'utf8');
const markerCount = template.split(marker).length - 1;
if (markerCount !== 1) {
  throw new Error(
    `Expected exactly one ${marker} in dist/index.html, found ${markerCount}`
  );
}

const appHtml: unknown = serverEntry.render();
if (typeof appHtml !== 'string' || !appHtml.includes('<h1')) {
  throw new Error('Prerendered HTML has no <h1>; refusing to ship it');
}

// A replacer function, so "$" sequences in the markup are not patterns.
await writeFile(
  htmlFile,
  template.replace(marker, () => appHtml)
);
await rm(ssrDir, { recursive: true, force: true });

console.log(`Prerendered ${appHtml.length} characters into dist/index.html`);
