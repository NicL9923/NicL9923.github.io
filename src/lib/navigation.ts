// One list for the desktop and mobile navs, and the e2e tests check every
// href resolves to a section in the static HTML.
export const navSections = [
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#work', label: 'Work' },
  { href: '#multiplier', label: 'Team impact' },
  { href: '#contact', label: 'Contact' },
] as const;
