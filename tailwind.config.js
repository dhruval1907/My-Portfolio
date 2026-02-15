/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#000000',
        'dark-secondary': '#0a0a0a',
        'dark-border': '#1a1a1a',
        'gray-soft': '#a1a1a1',
        'gray-light': '#d1d1d1',
        'purple-primary': '#8b5cf6',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
