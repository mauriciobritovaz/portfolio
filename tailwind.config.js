/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        raleway:['Raleway', 'sans-serif'],
      },
      borderWidth:{
        '1': '1px'
      },
      colors:{
        'roxito': {
          '1':'#FEFEFE ',
          '2':'#A586BC',
          '3':'#8A5EAB',
          '4':'#2D0F44',
          '5':'#08000E',
        },
        'verdito':{
          '1': '#FEFEFE',
          '2': '#54892C',
          '3': '#7FAB5E',
          '4': '#54892C',
          '5': '#102500',
        },
        'tan': {
          '1':'#FBEDE0',
          '2':'#E7D1B6',
          '3':'#D2B48C',
        },
        'begezito':{
          '1': '#FEFEFE',
          '2': '#F3EDE3',
          '3': '#E8DAC6',
          '4': '#DDC7A9',
          '5': '#D2B48C',
          '6': '#5A503C',
          '7': '#0F0E0A',
        }
      }
    },
  },
  plugins: [],
}

