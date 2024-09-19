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
        RSredBrown: "#50282C",
      },
      fontFamily: {
        Serif: ['"Noto Serif TC"', "serif"],
      },
    },
  },
  plugins: [],
};
