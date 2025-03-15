/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        bounce: 'bounce 3s infinite',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-yellow-50',
    'bg-yellow-100',
    'bg-green-50',
    'bg-green-100',
    'bg-pink-50',
    'bg-pink-100',
    'bg-blue-50',
    'bg-blue-100',
  ],
};