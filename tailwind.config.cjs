const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#f0f4fa',
          100: '#e1e8f5',
          200: '#cbd7eb',
          300: '#a8bdde',
          400: '#809dcd',
          500: '#5e7eb9',
          600: '#4764a0',
          700: '#394f83',
          800: '#32426b',
          900: '#2d3855',
          950: '#0f172a', // Deep Navy (Primary Background)
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Amber 500 (Primary Accent)
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        slate: {
          ...colors.slate,
          850: '#151e32', // Custom dark slate for variation
          900: '#0f172a', // Matching Brand 950
        }
      },
      boxShadow: {
        soft: '0 24px 60px rgba(15,23,42,0.25)'
      }
    }
  },
  plugins: []
};


