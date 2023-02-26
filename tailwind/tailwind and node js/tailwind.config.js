/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Mynerve", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        equator: {
          50: "#fcf9f0",
          100: "#f9f2db",
          200: "#f2e2b6",
          300: "#eacd87",
          400: "#e4ba6d",
          500: "#d99936",
          600: "#cb812b",
          700: "#a86626",
          800: "#875125",
          900: "#6d4321",
        },
        zeus: {
          50: "#f9f7f4",
          100: "#ede4da",
          200: "#dac8b5",
          300: "#c0a788",
          400: "#a2865f",
          500: "#876c45",
          600: "#6b5836",
          700: "#57482e",
          800: "#473c28",
          900: "#241f16",
        },
      },
    },
  },
  plugins: [],
};
