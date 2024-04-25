/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

let containerScreens = Object.assign({}, defaultTheme.screens);

delete containerScreens["2xl"];
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e11800",
        secondary: "#00000099",
      },
    },
    screens: { xs: "490px", us: "320px", ...defaultTheme.screens },
    container: {
      screens: { ...containerScreens },
    },
  },
  plugins: [],
};
