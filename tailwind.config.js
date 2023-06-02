/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFF',
          DEFAULT: '#F5F5F5',
          dark: '#eee'
        },
        secondary: {
          light: '#67eeff',
          DEFAULT: '#00BBF0',
          dark: '#008bbd'
        },
        tertiary: {
          light: '#2d2d2d',
          DEFAULT: '#1a1a1a',
          dark: '#000'
        }
      }
    }
  },
  plugins: []
}
