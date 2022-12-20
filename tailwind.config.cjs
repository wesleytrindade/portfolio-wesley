/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter':['Inter','sans-serif'],
      },
      backgroundImage:{
        'banner-background': "url(/assets/background_banner.jpg)"
      },
      colors:{
        'gray-transparent': "rgba(17,24,39,0.1)",
        'menu-transparent': "rgba(17,24,39,0.5)"
      }
    },
  },
  plugins: [],
}
