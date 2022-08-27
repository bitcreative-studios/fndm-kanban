const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      jakarta: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}
