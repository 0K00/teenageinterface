/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   22-12-2024 05:09:33
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 22-12-2024 11:07:39
 */
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

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
      spacing: {
        'full+4': 'calc(100%+4px)'
      }
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ".perspective": {
          perspective: "100px"
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d"
        },
        ".rotate-x-180": {
          transform: "rotateX(180deg)"
        },
        ".rotate-x-0": {
          transform: "rotateX(0)"
        }
      })
    })
  ],
}

