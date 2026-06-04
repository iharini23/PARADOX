/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#931521',
        secondary: '#0F53B8',
        accent: '#0C3994',
        dark: '#0f172a',
        light: '#f9fafb',
        border: '#e2e8f0',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 45px rgba(147,21,33,0.12)',
        cyan: '0 0 45px rgba(15,83,184,0.18)',
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
          'radial-gradient(circle at top left, rgba(147,21,33,0.06), transparent 35%), radial-gradient(circle at top right, rgba(15,83,184,0.04), transparent 30%)',
      },
    },
  },
  plugins: [],
};