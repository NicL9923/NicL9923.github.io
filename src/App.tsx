import { useCallback, useState } from 'react';
import AboutMe from './components/AboutMe';
import AmbientBackground from './components/AmbientBackground';
import BootSequence from './components/BootSequence';
import LightDarkModeToggle from './components/controls/LightDarkModeToggle';
import MobileNavigation from './components/controls/MobileNavigation';

const BOOT_SESSION_KEY = 'nicolas-layne-portfolio-booted';

const shouldShowBootSequence = () =>
  sessionStorage.getItem(BOOT_SESSION_KEY) !== 'true' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const App = () => {
  const [showBootSequence, setShowBootSequence] = useState(
    shouldShowBootSequence
  );

  const handleBootComplete = useCallback(() => {
    sessionStorage.setItem(BOOT_SESSION_KEY, 'true');
    setShowBootSequence(false);
  }, []);

  return (
    <>
      {showBootSequence && <BootSequence onComplete={handleBootComplete} />}

      <AmbientBackground />
      <div className="relative z-10 min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <header className="sticky top-0 z-40 mx-auto flex w-full max-w-6xl items-center justify-between gap-4 border-b border-arc-cyan/15 bg-background/90 px-4 py-4 backdrop-blur-sm sm:static sm:border-b-0 sm:bg-transparent sm:px-6 sm:backdrop-blur-none lg:px-8">
          <a
            href="#main-content"
            className="-m-2 rounded-md p-2 text-sm font-bold tracking-[0.16em] text-foreground"
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
          <MobileNavigation />
          <LightDarkModeToggle />
        </header>
        <AboutMe />
      </div>
    </>
  );
};

export default App;
