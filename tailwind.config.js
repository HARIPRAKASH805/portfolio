/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: '#0D1117',
        card: '#161B22',
        primary: '#00E5FF',
        secondary: '#7C3AED',
        ink: '#F8FAFC',
        accent: '#22C55E',
      },
    },
  },
  plugins: [],
};
