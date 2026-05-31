/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0a0a0f',
          muted: '#3d3d4a',
          faint: '#8a8a9a',
        },
        paper: {
          DEFAULT: '#fafaf7',
          warm: '#f4f2ec',
        },
        brand: {
          DEFAULT: '#1a1aff',
          muted: '#5555ff',
        },
        gold: {
          DEFAULT: '#c8a84b',
          light: '#f0e6c0',
        },
      },
      fontSize: {
        '2xs': ['10px', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
    },
  },
  plugins: [],
}
