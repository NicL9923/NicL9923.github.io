// ARC Raiders-inspired color palette
export const ArcColors = {
  red: '#E63946',
  orange: '#F4A261',
  yellow: '#E9C46A',
  green: '#2A9D8F',
  cyan: '#00B4D8',
  blue: '#0077B6',
  darkBlue: '#023E8A',
} as const;

// Array version for iteration (e.g., rainbow stripes)
export const ArcColorArray = [
  ArcColors.red,
  ArcColors.orange,
  ArcColors.yellow,
  ArcColors.green,
  ArcColors.cyan,
  ArcColors.blue,
] as const;

export type ArcColor = (typeof ArcColors)[keyof typeof ArcColors];
