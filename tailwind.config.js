/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b1418',
        cream: '#f7f7f2',
        teal: {
          50: '#eefcf9',
          100: '#d4f7f1',
          300: '#7fe7da',
          400: '#52d3c4',
          700: '#0f766e',
          900: '#134e4a',
        },
        ink: '#0b1418',
        cream: '#f7f7f2',
        teal: {
          50: '#eefcf9',
          100: '#d4f7f1',
          300: '#7fe7da',
          400: '#52d3c4',
          700: '#0f766e',
          900: '#134e4a',
        },
        beige: {
          50: '#f9f6f2',
          100: '#f4efea',
          200: '#EAE0D5',
          300: '#dcc9b8',
          400: '#c5a882',
          500: '#b8956b',
        },
        cyan: {
          400: '#22d3ee',
          500: '#4DD0E1',
          600: '#0891b2',
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};