/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "oyoya-purple": "#553ed7",
        "oyoya-yellow": "#ecf34b",
      },
      fontFamily:{
        maru: ["gt-maru", "sans-serif"],
      }
    },
  },
  plugins: [],
};
