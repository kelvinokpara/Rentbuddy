/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primHue: "#49608C",
        secHue: "#044BD9",
        textGray: "#686E80",
        textBlack: "#1F1F1F",
        cardGray: "#cecece99",
        useRed: "#FF0100",
        btnBorder1: "#5580FF",
        btnBorder2: "#99C8F2",
      },
      fontFamily: {
        poppins: "poppins",
        inter: "inter",
      },
    },
  },
  plugins: [],
};
