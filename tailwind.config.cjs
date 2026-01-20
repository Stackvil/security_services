const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          green: '#7DC442',
          blue: '#3A55A4',
        },
        accent: {
          yellow: '#FBB034',
          subscribe: '#FEF22E', // The bright yellow for buttons
        },
        dark: {
          text: '#646464',
          DEFAULT: '#646464',
        },
        whatsapp: '#25D366',
        // Keep existing slate if needed, or rely on defaults
        slate: colors.slate,
      },
      boxShadow: {
        soft: '0 24px 60px rgba(15,23,42,0.25)'
      }
    },
  },
  plugins: [],
};
