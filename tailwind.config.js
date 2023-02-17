/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montseratt: ['Montserrat', 'sans-serif']
      },
      colors: {
        mainColor: {
          blue: '#0000FF'
        }
      }
    },
    

  },
  plugins: [],
}
