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
      keyframes: {
        dropIn: {
          '0%': {
            transform: 'translateY(-200%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: 1,
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        dropIn1: 'dropIn 1s ease-in-out forwards',
        dropIn2: 'dropIn 1s ease-in-out .3s forwards',
        dropIn3: 'dropIn 1s ease-in-out .6s forwards',
        fadeIn: 'fadeIn 1s ease-in 1.5s forwards',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
