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
        'begezito':{
          '1': '#FEFEFE',
          '2': '#F3EDE3',
          '3': '#E8DAC6',
          '4': '#DDC7A9',
          '5': '#D2B48C',
          '6': '#5A503C',
          '7': '#0F0E0A',
        }
      },
      transitionProperty:{
        'height ': 'height '
      }
    },
  },
  plugins: [],
}

