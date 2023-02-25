/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '376px',
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        '2k': '2560px',
        '4k': '3840px',
      },
      colors: {
        // primary: '#5651e5',
        primary: '#673AB7',
        background: '#ecf0f3',
        grey900: '#212121',
        grey800: '#424242',
        grey700: '#616161',
        grey600: '#757575',
        grey500: '#9e9e9e',
        grey400: '#BDBDBD',
        grey300: '#E0E0E0',
        grey200: '#EEEEEE',
        grey100: '#F5F5F5',
        grey50: '#FAFAFA',
      },
    },
  },
  plugins: [],
};
