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
        "dirty-yellow-light": "#F7BA00",
        "midnight-gray": "#20202A",
        "midnight-gray-lighter": "#38384a",
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
      // Slide in animation
      keyframes: {
        "slide-l-r": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "slide-r-l": {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        // Slide in animation from left to right
        "slide-l-r": "slide-l-r 0.5s ease-out",
        // Slide in animation from right to left
        "slide-r-l": "slide-r-l 0.5s ease-out",
      },
    }
  },
  plugins: [
    require("tailwindcss-animate"),
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
    }),
  ],
}