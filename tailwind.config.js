/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './themes/coda-theme/layouts/**/*.html',
    './content/**/*.md',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'secondary': ['"Work Sans"', 'sans-serif'],
      },
      colors: {
        purple: {
          50: '#fef5f5',
          100: '#fce9e9',
          200: '#f9c4c4',
          300: '#f5a0a0',
          400: '#e97d7d',
          500: '#df6969',
          600: '#DD5B5B',
          700: '#c44a4a',
          800: '#9e3c3c',
          900: '#7d3030',
        },
        indigo: {
          50: '#f0f9ff',
          100: '#e0f4ff',
          200: '#b8e8ff',
          300: '#80DBFF',
          400: '#4ec8f0',
          500: '#2eb5dc',
          600: '#1e9ec4',
          700: '#187fa0',
          800: '#12607a',
          900: '#0c4559',
        },
        emerald: {
          50: '#fef2fa',
          100: '#fce7f5',
          200: '#f8c8ea',
          300: '#f0a0d6',
          400: '#ec88d0',
          500: '#E971C8',
          600: '#E971C8',
          700: '#d44fb5',
          800: '#b33c97',
          900: '#8f307a',
        },
      },
    },
  },
  plugins: [],
}
