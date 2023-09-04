/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "426px",
      sm: "641px",
      md: "769px",
      lg: "1025px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        text: "#050605",
        background: "#e3e8e7",
        primary: "#3b4245",
        secondary: "#e8e3e4",
        accent: "#8a7a75",
      },
    },
  },
  plugins: [],
};
