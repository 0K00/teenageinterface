/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:36:57
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 14-12-2024 23:04:25
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      boxShadow: {
        "tab": "0px 2px 0px 0px rgba(0, 0, 0, 1), inset 0px -1px 0px 0px rgba(0, 0, 0, 1)"
      }
    },
  },
  plugins: [],
}

