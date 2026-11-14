import './index.css';

import { createRoot, hydrateRoot } from 'react-dom/client';
import { Root } from './Root';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

// Production HTML is prerendered by scripts/prerender.ts. The dev server
// serves the empty shell, which has nothing to hydrate.
if (rootElement.firstElementChild) {
  hydrateRoot(rootElement, <Root />);
} else {
  createRoot(rootElement).render(<Root />);
}
