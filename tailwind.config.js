/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px'
    },
    extend: {
      colors: {
        primary: '#FF1A1A',
        secondary: '#7E0000',
        tertiary: '#4B0000'
      },
      fontFamily: {
        porscha: ['Porscha', 'sans-serif'],
        porschav3: ['Porschav3', 'sans-serif'],
        porschabolditalic: ['PorschaBoldItalic', 'sans-serif'],
        porscha3ditalic: ['Porscha3ditalic', 'sans-serif'],
        porschalaseritalic: ['PorschaLaserItalic', 'sans-serif'],
        tektur: ['Tektur', 'sans-serif'],
        porschaitalic: ['PorschaItalic', 'sans-serif']
      },
      dropShadow: {
        'red-glow': '0 0 60px rgba(255, 26, 26, 1)'
      }
    }
  },
  plugins: []
};
