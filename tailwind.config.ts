import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          150: 'var(--color-primary-150)',
          200: 'var(--color-primary-200)',
          250: 'var(--color-primary-250)',
          300: 'var(--color-primary-300)',
          350: 'var(--color-primary-350)',
          400: 'var(--color-primary-400)',
          450: 'var(--color-primary-450)',
          500: 'var(--color-primary-500)',
          550: 'var(--color-primary-550)',
          600: 'var(--color-primary-600)',
          650: 'var(--color-primary-650)',
          700: 'var(--color-primary-700)',
          750: 'var(--color-primary-750)',
          800: 'var(--color-primary-800)',
          850: 'var(--color-primary-850)',
          900: 'var(--color-primary-900)',
          950: 'var(--color-primary-950)',
          1000: 'var(--color-primary-1000)',
          DEFAULT: 'var(--color-primary)',
          rgb: 'var(--color-primary-rgb)',
          contrast: 'var(--color-primary-contrast)',
          'contrast-rgb': 'var(--color-primary-contrast-rgb)',
          shade: 'var(--color-primary-shade)',
          tint: 'var(--color-primary-tint)',
        },
      },
    },
  },
  plugins: [],
}
export default config
