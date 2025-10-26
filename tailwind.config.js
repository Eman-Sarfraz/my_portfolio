/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
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