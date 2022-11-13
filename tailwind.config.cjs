/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Open Sans",
      },
      colors: {
        'blue': '#00a1ff',
      },
    },
  },
  plugins: [],
};
