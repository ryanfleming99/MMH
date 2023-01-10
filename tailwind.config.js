const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "exerciseImg": url("/content/categoryImages/exercise.jpg")
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
