/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, Arial, Helvetica, sans-serif",
      },
      colors: {
        custom:{
          bg_header_first: "#5433FF",
          bg_header_second: "#20BDFF",
          bg_header_third: "#A5FECB",
          bg_main_first: "#77A1D3",
          bg_main_second: "#79CBCA",
          bg_main_third: "#E684AE",
          bg_box_first:"#5433FF",
          bg_box_second: "#20BDFF",
          bg_box_third: "#A5FECB",
        },
      }
    },
  },
  plugins: [],
}
