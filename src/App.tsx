import { useCallback, useState, useSyncExternalStore } from 'react';
import AmbientBackground from './components/AmbientBackground';
import BootSequence from './components/BootSequence';
import ThemeColorMeta from './components/controls/ThemeColorMeta';
import Capabilities from './components/sections/Capabilities';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import SelectedWork from './components/sections/SelectedWork';
import TeamImpact from './components/sections/TeamImpact';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';

const BOOT_SESSION_KEY = 'nicolas-layne-portfolio-booted';

// Storage can throw when the browser blocks site data. The boot toast is
// decorative, so skip it whenever we cannot remember that it already played.
const hasBootedThisSession = () => {
  try {
    return sessionStorage.getItem(BOOT_SESSION_KEY) === 'true';
  } catch {
    return true;
  }
};

const rememberBoot = () => {
  try {
    sessionStorage.setItem(BOOT_SESSION_KEY, 'true');
  } catch {
    // Nothing to remember it in; the toast simply plays again next load.
  }
};

// Decided once per page load in the browser. The prerender has no window.
const bootOnThisLoad =
  typeof window !== 'undefined' &&
  !hasBootedThisSession() &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const noopSubscribe = () => () => {};

// False during the prerender and hydration, true afterward, so client-only
// UI never makes the hydrated markup differ from the static HTML.
const useIsHydrated = () =>
  useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );

const App = () => {
  const isHydrated = useIsHydrated();
  const [bootDone, setBootDone] = useState(false);

  const handleBootComplete = useCallback(() => {
    rememberBoot();
    setBootDone(true);
  }, []);

  return (
    <>
      {isHydrated && bootOnThisLoad && !bootDone ? (
        <BootSequence onComplete={handleBootComplete} />
      ) : null}
      <ThemeColorMeta />

      <AmbientBackground />
      <div className="relative z-10 min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <SiteHeader />
        <main
          id="main-content"
          className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8"
        >
          <div className="flex flex-col gap-16 animate-in fade-in duration-500 sm:gap-20">
            <Hero />
            <Capabilities />
            <SelectedWork />
            <TeamImpact />
            <Contact />
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
};

export default App;
