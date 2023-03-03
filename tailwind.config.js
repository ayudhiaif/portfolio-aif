/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        // emerald 500
        primary: '#10b981',
        // slate 600
        secondary: '#52525b', 
        // emerald 800
        third: '#166534',
        // slate 900
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
