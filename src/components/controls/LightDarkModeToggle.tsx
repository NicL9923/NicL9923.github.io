import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Button } from '../ui/button';

const LightDarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const currentTheme =
    resolvedTheme ??
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light');
  const isLightMode = currentTheme === 'light';
  const nextTheme = isLightMode ? 'dark' : 'light';

  const toggleTheme = () => {
    setTheme(nextTheme);
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-lg"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      className="rounded-full bg-background/80 shadow-sm backdrop-blur-sm"
    >
      {isLightMode ? <FaMoon /> : <FaSun />}
      <span className="sr-only">Switch to {nextTheme} mode</span>
    </Button>
  );
};

export default LightDarkModeToggle;
