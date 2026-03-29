/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.tsx', './components/**/*.tsx', './pages/**/*.tsx', './lib/**/*.ts'],
  safelist: [
    'focus:not-sr-only', 'focus:fixed', 'focus:top-2', 'focus:left-2',
    'focus:z-[10000]', 'focus:bg-primary', 'focus:text-secondary',
    'focus:font-bold', 'focus:px-4', 'focus:py-2', 'focus:rounded-lg', 'focus:shadow-lg',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d69e2e',
        'primary-hover': '#b77f1d',
        'primary-dark': '#8b6914',  /* WCAG AA on white: ~4.9:1 */
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
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.08)',
        'primary-glow': '0 4px 16px rgba(214, 158, 46, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      fontSize: {
        /* Slightly larger xs (13px) for better mobile readability (#4) */
        xs: ['0.8125rem', { lineHeight: '1.25rem' }],
      },
    },
  },
  plugins: [],
};
