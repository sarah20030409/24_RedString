/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        20: "20px",
        15: "15px",
      },
      padding: {
        15: "15px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",

        //=====basic color=====
        RSredBrown: "#50282C",
        RSredDeep: "#77111B",
        RSblack: "#231815",
        RSgray: "#505050",
        RSredLight: "#A31422",
        RSgoldDeep: "#D0AF79",
        RSgoldLight: "#EBCFA1",

        // ===================
      },
      fontFamily: {
        Serif: ['"Noto Serif TC"', "serif"],
      },
      screens: {
        sm: "470px",
        md: "740px",
        lg: "1250px",
      },
    },
  },
  plugins: [],
};
