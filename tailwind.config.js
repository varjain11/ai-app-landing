/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#171614",
        saffron: "#d88b35",
        palm: "#11756d",
        pearl: "#fbf7f0",
        night: "#25224a",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(28, 25, 23, 0.12)",
      },
    },
  },
  plugins: [],
};
