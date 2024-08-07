/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow1: "#FFE281",
        yellow2: "#FFCB00",
        pink1: "#F9E8DC",
        pink2: "#FFA180",
        blackbase: "#0F0F0F",
        brown1: "#42210B",
        vg: "#D9D9D9",
        greyborder: "#AAAAAA",
        blue1: "#64FCD9",

        circleorange: "#FF7F50",
        circlebrown: "#42210B",
        circleblue: "#000080",
        circlegreen: "#64FCD9",
      },
      fontFamily: {
        Tenor: ["Tenor Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
