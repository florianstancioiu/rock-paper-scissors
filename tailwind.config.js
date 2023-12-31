/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: () => ({
        'gradient-radial':
          'radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%)',
        'gradient-linear': 'linear-gradient(0deg, #F3F3F3 0%, #FFF 100%)',
        'game-image': "url('/images/game-bg.png')",
      }),
      boxShadow: {
        winner:
          'rgba(0, 0, 0, 0.197) 0px 3px 3px, rgba(255, 255, 255, 0.05) 0px 0px 0px 30px, rgba(255, 255, 255, 0.02) 0px 0px 0px 60px, rgba(255, 255, 255, 0.02) 0px 0px 0px 100px;',
      },
      colors: {
        'primary-border': 'rgba(255, 255, 255, 0.29)',
        secondary: '#565468',
        ternary: '#2A45C2',
        rules: '#3B4262',
      },
      fontFamily: {
        'barlow-semi-condensed': ['Barlow Semi Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
