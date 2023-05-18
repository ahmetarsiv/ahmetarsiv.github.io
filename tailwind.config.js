const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Nunito', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}

