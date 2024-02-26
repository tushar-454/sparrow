/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        apple: {
          50: '#f4faf3',
          100: '#e4f5e3',
          200: '#cae9c9',
          300: '#9ed79e',
          400: '#6bbd6b',
          500: '#48a348',
          600: '#368336',
          700: '#2d682d',
          800: '#285328',
          900: '#224523',
          950: '#0e2510',
        },
        jagger: {
          50: '#f9f6fe',
          100: '#f2ebfc',
          200: '#e7dafa',
          300: '#d4bdf5',
          400: '#ba93ed',
          500: '#9f69e3',
          600: '#894ad3',
          700: '#7438b8',
          800: '#623297',
          900: '#51297a',
          950: '#36135a',
        },
      },
    },
  },
  plugins: [],
};
