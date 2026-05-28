/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#050505',
        ink: '#0b0d0c',
        lime: '#b7ff00',
        aurora: '#22ff9a',
        magenta: '#ff2bd6',
        runway: '#ff7a00',
      },
      fontFamily: {
        display: ['Impact', 'Arial Narrow', 'Roboto Condensed', 'sans-serif'],
        body: ['Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 24px rgba(183, 255, 0, 0.42)',
        magenta: '0 0 24px rgba(255, 43, 214, 0.28)',
      },
    },
  },
  plugins: [],
}
