/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  important: true,
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryColor: '#2F65E3',
        secondaryColor: '#2F65E3',
        backgroundColor: '#4CAF50',
        darkBackgroundColor: '#232323',
        backgroundColor100: '#E5E5E5',
        backgroundColor200: '#FCFCFC',
        backgroundColor300: '#9F9F9F',
        backgroundColor400: '#3A3A3A',
        successColor: '#039855',
        dangerColor: '#d95a47',
        textColor: '#414141',
      },
    },
  },
  plugins: [],
};
