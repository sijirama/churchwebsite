/** @type {import('tailwindcss').Config} */

/*font-family: 'Roboto Slab', serif; 200,400,900*/
/*font-family: 'Rubik', sans-serif; 400,500*/

module.exports = {
  content: ["./src/**/*.{html, js ,jsx}"],
  mode:"jit",
  theme: {
    extend: {
      colors:{
        blue:"#2CBCE9",
        red:"#DC4492",
        yellow:"#FDCC49",
        grey:"#ededed",
        deepblue:"#010026",
        darkgreen:"#757575",
        opaqueblack:"rgba(0,0,0,0.35)",
      },
      backgroundImage:(theme) => ({
        "gradient-rainbow":"linear-gradient(81.66deg, #00B5EE 7.21% , #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":"linear-gradient(90deg, #24cbbf 14.53% , #Fc59ff 69.3%, #FFBD0c 117%)",

      }),
        
      fontFamily : {
          robotoSlab:['Roboto Slab',"serif"],
          rubik:['Rubik',"serif"]
      }  
    },
    screens:{
        xs:"480px",
        sm:"768px",
        md:"1060px"
    }
  },
  plugins: [],
}
