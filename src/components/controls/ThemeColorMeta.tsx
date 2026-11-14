import { useEffect } from 'react';
import { useTheme } from 'next-themes';

// Must match --background in index.css and the inline script in index.html.
const themeColors = { light: '#ffffff', dark: '#0d1117' } as const;

// Keeps the mobile browser chrome color in step with the active theme.
const ThemeColorMeta = () => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme !== 'light' && resolvedTheme !== 'dark') return;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', themeColors[resolvedTheme]);
  }, [resolvedTheme]);

  return null;
};

export default ThemeColorMeta;
