/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      boxShadow: {
        "tab": "0px 2px 0px 0px rgba(0, 0, 0, 1), inset 0px -1px 0px 0px rgba(0, 0, 0, 1)"
      },
      sans: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "'Segoe UI'",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "'Apple Color Emoji'",
        "'Segoe UI Emoji'",
        "'Segoe UI Symbol'",
        ...fontFamily.sans
      ]
    },
  },
  plugins: [],
}

