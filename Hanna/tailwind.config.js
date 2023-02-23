/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "light":"#F0F3F6",
        "blue":"#5c6B7A",
        "gray":"#303131",
        "white":"#ffff"
      },
    },
  },
  plugins: [],
}
