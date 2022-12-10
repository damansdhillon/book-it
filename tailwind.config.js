/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dirty-yellow-dark": "#FFC007",
        "dirty-yellow-light": "#FFE187",
        "midnight-gray": "#20202A",
        "midnight-gray-light": "#24242E",
        "background": "var(--background)",
        "primary": "var(--primary-color)",
      },
      button: {
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
      },
      sidebar: {
        background: "var(--right-sidebar-background)",
      },
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      // Add Custom Utilities to hide scrollbar
      addUtilities({
        ".hide-scrollbar": {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      })
    })
  ],
}