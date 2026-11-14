import { navSections } from '../lib/navigation';
import LightDarkModeToggle from './controls/LightDarkModeToggle';
import MobileNavigation from './controls/MobileNavigation';

const SiteHeader = () => (
  <header className="sticky top-0 z-40 mx-auto flex w-full max-w-6xl items-center justify-between gap-4 border-b border-arc-cyan/15 bg-background/90 px-4 py-4 backdrop-blur-sm sm:static sm:border-b-0 sm:bg-transparent sm:px-6 sm:backdrop-blur-none lg:px-8">
    <a
      href="#main-content"
      className="-m-2 rounded-md p-2 text-sm font-bold tracking-[0.16em] text-foreground"
    >
      NL<span className="text-arc-cyan">.</span>
      <span className="sr-only"> Nicolas Layne, home</span>
    </a>
    <nav
      aria-label="Primary navigation"
      className="ml-auto hidden items-center gap-1 sm:flex"
    >
      {navSections.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {label}
        </a>
      ))}
    </nav>
    <MobileNavigation />
    <LightDarkModeToggle />
  </header>
);

export default SiteHeader;
