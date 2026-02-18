/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.tsx', './components/**/*.tsx', './lib/**/*.ts'],
  theme: {
    extend: {
      colors: {
        primary: '#d69e2e',
        'primary-hover': '#b77f1d',
        secondary: '#1a365d',
        'secondary-light': '#2c5282',
        'background-light': '#f8f7f6',
        'background-dark': '#201b12',
        'surface-light': '#ffffff',
      },
      fontFamily: {
        display: ['Public Sans', 'sans-serif'],
        body: ['Noto Sans JP', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        card: '0 2px 10px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};
