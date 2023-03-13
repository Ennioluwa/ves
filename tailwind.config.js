/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DF4D31",
      },
      objectPosition: {
        "center-top": "center 20%",
        "center-left": "35% center",
      },
    },
  },
  plugins: [],
};
