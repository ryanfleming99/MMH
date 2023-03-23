const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      translate: {
        100: "28rem"
      },
      backgroundImage: {
        "exerciseImg": url("/content/categoryImages/exercise.jpg")
      },
      colors: {
        mainbg: "#1b1b1b",
        navbarbg: "#262525",
        btngray: "#f2f4f3"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),

  ],
}
