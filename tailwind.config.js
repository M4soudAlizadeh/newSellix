/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inter: "Inter",
    },
    colors: {
      transColor: "transparent",
      whiteBtnBgColor: "white",
      whiteBtnBgColorHover: "#F5F7F8",
      blackBtnBgColor: "black",
      whiteBtnTextColor: "#555D67",
      blackBtnColorHover: "#262A30",
    },
    variants: {
      backgroundColor: ["responsive", "hover", "focus", "active"],
    },
    extend: {},
  },
  plugins: [],
};
