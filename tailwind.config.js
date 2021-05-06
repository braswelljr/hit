const color = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./public/index.html", "./src/**/*.{js, jsx, ts, tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["'Mulish'", ...defaultTheme.fontFamily.sans]
    },
    screens: {
      xs: "475px",
      "3xl": "1920px",
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        gray: color.trueGray,
        primary: "#f6881f",
        secondary: "#4a4a4a",
        footer: "#333333",
        "footer-text": "#c4c4c4"
      },
      animations: {
        slide: `slide 2s ease`,
        carousel: `carosel 10s ease-in`
      },
      keyframes: {
        slide: {
          "0%": {
            opacity: ".2"
          },
          "50%": {
            opacity: ".5"
          },
          "100%": {
            opacity: "1"
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
