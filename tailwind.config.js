/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'navbar': '5px 0px 10px rgba(0, 0, 0, 0.2)',
        'bottombar': '0px -5px 10px rgba(0, 0, 0, 0.2)',
        'nav_item': '0px 0px 5px rgba(0, 0, 5, 0.05)',
        'control_panel': '0px 0px 10px rgba(0, 0, 5, 0.2)',
      }
    },
  },
  plugins: [],
}
