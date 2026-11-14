import { StrictMode } from 'react';
import { ThemeProvider } from 'next-themes';
import App from './App';

// Shared by the browser entry and the build-time prerender so both render
// the same tree. The theme storage key "theme" is also read by the inline
// script in index.html.
export const Root = () => (
  <StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <App />
    </ThemeProvider>
  </StrictMode>
);
