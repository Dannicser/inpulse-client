/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

let containerScreens = Object.assign({}, defaultTheme.screens);

delete containerScreens["2xl"];
delete containerScreens["sm"];

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e11800",
        secondary: "#00000099",
      },
    },
    container: {
      screens: {
        ...containerScreens,
      },
    },
  },
  plugins: [],
};
