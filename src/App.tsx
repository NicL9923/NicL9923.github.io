import { useCallback, useState } from 'react';
import AboutMe from './components/AboutMe';
import AmbientBackground from './components/AmbientBackground';
import BootSequence from './components/BootSequence';
import LightDarkModeToggle from './components/controls/LightDarkModeToggle';

const BOOT_SESSION_KEY = 'nicolas-layne-portfolio-booted';

const shouldShowBootSequence = () =>
  sessionStorage.getItem(BOOT_SESSION_KEY) !== 'true' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const App = () => {
  const [isBooting, setIsBooting] = useState(shouldShowBootSequence);

  const handleBootComplete = useCallback(() => {
    sessionStorage.setItem(BOOT_SESSION_KEY, 'true');
    setIsBooting(false);
  }, []);

  return (
    <>
      {isBooting && <BootSequence onComplete={handleBootComplete} />}

      <AmbientBackground />
      <div
        aria-hidden={isBooting || undefined}
        inert={isBooting}
        className={`relative z-10 min-h-screen transition-opacity duration-300 ${
          isBooting ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#main-content"
            className="text-sm font-bold tracking-[0.16em] text-foreground"
            aria-label="Nicolas Layne, home"
          >
            NL<span className="text-arc-cyan">.</span>
          </a>
          <nav
            aria-label="Primary navigation"
            className="ml-auto hidden items-center gap-1 sm:flex"
          >
            <a
              href="#capabilities"
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Capabilities
            </a>
            <a
              href="#work"
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Work
            </a>
            <a
              href="#multiplier"
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Team impact
            </a>
          </nav>
          <LightDarkModeToggle />
        </header>
        <AboutMe />
      </div>
    </>
  );
};

export default App;
