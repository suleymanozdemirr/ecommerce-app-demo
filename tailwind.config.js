/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      container: {
        center: true,
        padding: "20px",
      },
      colors: {
        Black: "#1E2832",
        primary: "#fea928",
        secondary: "#ed8900",
      },
    },
  },
  plugins: [],
}
