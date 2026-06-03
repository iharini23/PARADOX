/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Logo-driven palette (warm red + cool blue)
        primary: '#E03A3A',
        secondary: '#1E90FF',
        dark: '#071022',
        surface: 'rgba(7, 16, 34, 0.72)',
      },
      fontFamily: {
        body: ['Manrope', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 45px rgba(224,58,58,0.18), 0 0 60px rgba(30,144,255,0.10)',
        cyan: '0 0 45px rgba(30,144,255,0.18)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at top left, rgba(224,58,58,0.14), transparent 35%), radial-gradient(circle at top right, rgba(30,144,255,0.12), transparent 30%)',
      },
    },
  },
  plugins: [],
};