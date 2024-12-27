/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   22-12-2024 05:57:16
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 22-12-2024 09:53:58
 */
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
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
      height: {
        "4.5": "1.125rem"
      }
    },
  },
  plugins: [],
}
