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

        <header className="mx-auto flex w-full max-w-6xl justify-end px-4 py-4 sm:px-6 lg:px-8">
          <LightDarkModeToggle />
        </header>
        <AboutMe />
      </div>
    </>
  );
};

export default App;
