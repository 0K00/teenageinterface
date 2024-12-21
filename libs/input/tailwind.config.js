const plugin = require('tailwindcss/plugin');
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'geist': ['Geist'],
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
      width: {
        '460px': '460px'
      },
      boxShadow: {
        'autofill': 'inset 0 0 0px 1000px #dbeafe',
        'autofill-dark': 'inset 0 0 0px 1000px #202938'
      },
      colors: {
        'autofill': '#93c5fd',
        'autofill-dark': '#555C68'
      }
    },
  },
  plugins: [
    plugin(function ({ addBase, addVariant, e, matchVariant }) {
      addBase({
        'text-fill': {
          '-webkit-text-fill-color': '#0a0a0a'
        },
        'text-fill-dark': {
          '-webkit-text-fill-color': '#fafafa'
        }
      }),
      addVariant('not-invalid', '&:not(:placeholder-shown):not(:focus)'),
      matchVariant(
        'peer',
        (value) => [
          `.peer${value} ~ &`,
          `&:has(~ .peer${value})`
        ],
        {
          values: {
            'placeholder-invalid': ':not(:placeholder-shown):not(:focus):invalid'
          }
        }
      )
    })
  ]
}

