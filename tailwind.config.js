const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      lato: ['Lato', 'sans-serif'],
    },
    colors:{
      "special-gray": '#f5f0f0',
       "red-500": colors.red[500],
        "red-600": colors.red[600],
        "red-400": colors.red[400],
        "white": colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  plugins: [],
}