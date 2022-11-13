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
        'primary-white': '#f4f4f4'
      },
    },
  },
  plugins: [],
};
