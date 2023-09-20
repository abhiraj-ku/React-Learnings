/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "indian-saffron": "#FF9933", // Saffron color
        "indian-white": "#FFFFFF", // White color
        "indian-green": "#138808", // Green color
      },
    },
  },
  plugins: [],
};
