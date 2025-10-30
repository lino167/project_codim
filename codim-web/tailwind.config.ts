import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'codim-black': '#0A0A0A',
        'codim-red': '#D90429',
        'codim-white': '#FFFFFF',
        'codim-gray': '#1E1E1E',
      },
    },
  },
  plugins: [],
}

export default config