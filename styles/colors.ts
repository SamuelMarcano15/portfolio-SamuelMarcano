/**
 * Design color constants for reference.
 * These map to the @theme variables in globals.css.
 * Use Tailwind classes (bg-background, text-primary, etc.) in components.
 */
export const colors = {
  background: '#031522', // Deep navy – --color-background
  foreground: '#F0F1EE', // Off-white  – --color-foreground
  primary:    '#3894A1', // Teal       – --color-primary
  secondary:  '#2F404F', // Dark steel – --color-secondary
} as const

export type ColorKey = keyof typeof colors
