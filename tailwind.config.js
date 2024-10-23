/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        red:'#FF0000',
      },
      backgroundImage:{

        hero :"url(src/assets/home-img.jpeg)",
        menu :"url(src/assets/bg.jpg)"
      }
    },
  },
  plugins: [],
}

