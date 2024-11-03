/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'exl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'min': '768px', 'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'min': '640px', 'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'min': '500px', 'max': '639px'},
        // => @media (max-width: 639px) { ... }
        's': {'min': '0px','max': '500px'},
        // 'xs': {'max': '400px'},
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}

