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
          blue: '#6495ED',
          darkBlue: '#00008B',
          lightenGray: '#ddd',
          gray: '#bbb',
          darkenGray: '#999',
          darkestGray: '#373a3c',
          tag: '#aaa',
        }
      }, 
      spacing: {
        navItem: '0.425rem',
        0.3: '0.3rem',
        0.2: '0.2rem',
        tag: '0.6rem',
      },
      fontSize: {
        logo: '3.5rem',
        date: '0.8rem',
      },
      borderRadius: {
        buttonSm: '0.2rem',
        tag: '10rem',
      },
    },
    

  },
  plugins: [],
}
