import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#0A0A0A',
      red: '#D90429',
      white: '#FFFFFF',
      gray: '#1E1E1E',
    },
    extend: {},
  },
  plugins: [],
}

export default config