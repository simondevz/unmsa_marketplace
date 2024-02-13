/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      white: "#ffffff",
      black: "#222222",
      ash: "#666666",
      light_ash: "#868686",
      dark_ash: "#3D3D3D",
      green: "#18661B",
      light_green: "#4FBE54",
      lighter_green: "#BFF9C1",
      lemon: "#34EA3B",
      darker_lemon: "#26912A",
      dark_green: "#0F3C11",
      orange: "#FFAA47",
      red: "#B32626",
    },
    fontFamily: {
      agrandir_grandheavy: ["Agrandir-grandheavy", "sans-serif"],
      agrandir_bold: ["Agrandir-bold", "sans-serif"],
      agrandir_thinItalic: ["Agrandir-thinItalic", "sans-serif"],
      agrandir: ["Agrandir", "sans-serif"],
      calibri_italic: ["Calibri-italic", "sans-serif"],
      calibri_bold: ["Calibri-bold", "sans-serif"],
      calibri: ["Calibri", "sans-serif"],
      gontserrat_bold: ["Gontserrat-bold", "sans-serif"],
      montserrat_bold: ["Montserrat-bold", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        green_home: "url('/src/app/assets/image/green_bg.png')",
        home: "url('/src/app/assets/image/home_bg.png')",
      },
    },
  },
  plugins: [],
};
