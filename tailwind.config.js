/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   
    extend: {
       colors:{
      'test-100': '#2980B9',
      'test-200': '#E74C3C '
    },
    spacing:{
      '15':'100px'
    }
  },
  },
  plugins: [],
}

