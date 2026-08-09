import type { MouseEvent } from 'react';

const sections = [
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#work', label: 'Work' },
  { href: '#multiplier', label: 'Team impact' },
] as const;

const closeMenu = (event: MouseEvent<HTMLAnchorElement>) => {
  event.currentTarget.closest('details')?.removeAttribute('open');
};

const MobileNavigation = () => {
  return (
    <details className="relative ml-auto sm:hidden">
      <summary className="flex min-h-10 cursor-pointer list-none items-center rounded-md border bg-background/80 px-3 text-sm font-medium shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
        Sections
        <span aria-hidden="true" className="ml-2 text-arc-cyan">
          ▾
        </span>
      </summary>
      <nav
        aria-label="Mobile navigation"
        className="absolute top-[calc(100%+0.5rem)] right-0 z-50 grid min-w-44 overflow-hidden rounded-lg border border-arc-cyan/20 bg-background p-1 shadow-xl"
      >
        {sections.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            className="flex min-h-11 items-center rounded-md px-3 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            {label}
          </a>
        ))}
      </nav>
    </details>
  );
};

export default MobileNavigation;
