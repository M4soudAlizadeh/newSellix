/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "0px",
      // => @media (min-width: 640px) { ... }
      smMax: { max: "640px" },
      // => @media (max-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mdMax: { max: "770px" },
      // => @media (max-width: 770px) { ... }

      lg: "968px",
      // => @media (min-width: 1024px) { ... }

      lgMax: { max: "968px" },
      // => @media (max-width: 968px) { ... }

      lgMax2: { max: "1097px" },
      // => @media (max-width: 1097px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
    extend: {
      maxWidth: {
        MaxW: "1376px",
      },
    },
  },
  plugins: [],
};
