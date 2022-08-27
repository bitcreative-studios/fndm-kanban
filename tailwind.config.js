const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      jakarta: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#635FC7',
          // Hover color
          100: '#A8A4FF',
        },
        danger: {
          DEFAULT: '#EA5555',
          // Hover color
          100: '#FF9898',
        },
        black: '#000112',
        grey: {
          // Lines (light)
          50: '#E4EBFA',
          100: '#828FA3',
          // Lines (dark)
          200: '#3E3F4E',
          300: '#2B2C37',
        },
        surface: {
          light: '#F4F7FD',
          dark: '#20212C',
        },
      },
    },
  },
  plugins: [],
}
