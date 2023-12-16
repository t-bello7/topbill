/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  important: true,
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lexandDeca: ['Lexend Deca', ...defaultTheme.fontFamily.sans],
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primaryColor: '#008080',
        secondaryColor: '#004949',
        backgroundColor: '#F9F9F9',
        darkBackgroundColor: '#232323',
        backgroundColor100: '#E5E5E5',
        backgroundColor200: '#FCFCFC',
        backgroundColor300: '#9F9F9F',
        backgroundColor400: '#3A3A3A',
        textColor: '#414141'
      },
    },
  },
  plugins: [],
};
