// tailwind.config.ts
import type { Config } from 'tailwindcss'
import { tokens } from './src/styles/theme'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/styles/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // aliases brand → apontam para CSS vars (coerentes com theme.css)
        brand: {
          black: tokens.colors.black,
          gray: tokens.colors.gray,
          white: tokens.colors.white,
          red: tokens.colors.red,
        },
      },
      borderRadius: {
        md: tokens.radii.md,
        lg: tokens.radii.lg,
        xl: tokens.radii.xl,
      },
      boxShadow: {
        soft: tokens.shadows.soft,
        card: tokens.shadows.card,
        focusRed: tokens.shadows.focusRed,
      },
      fontFamily: {
        heading: tokens.fonts.heading,
        body: tokens.fonts.body,
      },
      container: {
        center: true,
        padding: tokens.spacing.containerX,
      },
    },
  },
  plugins: [],
}
export default config
