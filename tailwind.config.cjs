/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js ,jsx}"],
  mode:"jit",
  theme: {
    extend: {
      colors:{
        blue:"#2CBCE9",
        red:"#DC4492",
        yellow:"FDCC49",
        grey:"#edede",
        deepblue:"#010026",
        darkgreen:"#757575",
        opaqueblack:"rgba(0,0,0,0.35)",
      },
      backgroundImage:(theme) => ({
        "gradient-rainbow":"linear-gradient(81.66deg, #00B5EE 7.21% , #FF45A4 45.05%, #FFBA00 78...)"
      })
    },
  },
  plugins: [],
}
