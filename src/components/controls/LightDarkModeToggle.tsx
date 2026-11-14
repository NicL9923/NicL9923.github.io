import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Button } from '../ui/button';

// The icon and label follow the `dark` class on <html>, which the inline
// script in index.html sets before paint. The prerendered markup is then
// right for both themes and hydration never has to swap it.
const LightDarkModeToggle = () => {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-lg"
      onClick={toggleTheme}
      className="rounded-full bg-background/80 shadow-sm backdrop-blur-sm"
    >
      <FaMoon aria-hidden="true" className="dark:hidden" />
      <FaSun aria-hidden="true" className="hidden dark:block" />
      <span className="sr-only dark:hidden">Switch to dark mode</span>
      <span className="sr-only hidden dark:inline">Switch to light mode</span>
    </Button>
  );
};

export default LightDarkModeToggle;
