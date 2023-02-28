/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-600": "#4B5565",
        "gray-900": "#121926",
      },
      fontSize: {
        "display-2xl": {
          fontSize: "4.5rem",
          lineHeight: "5.625rem",
          letterSpacing: "-0.02em",
        },
        "display-xl": {
          fontSize: "3.5rem",
          lineHeight: "4.625rem",
          letterSpacing: "-0.02em",
        },
        "display-lg": {
          fontSize: "3rem",
          lineHeight: "3.75rem",
          letterSpacing: "-0.02em",
        },
        "display-md": {
          fontSize: "2.25rem",
          lineHeight: "2.75rem",
          letterSpacing: "-0.02em",
        },
        "display-sm": {
          fontSize: "1.875rem",
          lineHeight: "2.375rem",
        },
        "display-xs": {
          fontSize: "1.5rem",
          lineHeight: "2rem",
        },
      },
      screens: {
        xl: "1080px",
        "2xl": "1280px",
      },
      fontFamily: {
        sans: [
          "Euclid Circular A",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
};
