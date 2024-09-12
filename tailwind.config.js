/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg_2.jpg')",
      },
      fontFamily: {
        roboto: ["robot", "sans-serif"],
      },
      colors: {
        cadet: "97B5BF",
      },
    },
  },
  plugins: [],
};
