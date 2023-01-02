/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    fontFamily: {
      roboto : ['Roboto'],
      newmono : ['"Xanh Mono"'],
      Yeseva:['"Yeseva One"'],

    },
    extend: {
      fontSize: {
        ultraxl: '100px'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
