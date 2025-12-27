/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Permet d’activer le mode sombre via une classe .dark sur <html> ou <body>
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Exo 2"', 'sans-serif'],
      },
      colors: {
        // 🎨 Palette claire
        primary: {
          DEFAULT: '#1E90FF', // Bleu principal
          light: '#3AA0FF',
          dark: '#0F5DA8',
        },
        secondary: {
          DEFAULT: '#00C896', // Vert secondaire
          light: '#33D9AA',
          dark: '#009D76',
        },
        background: {
          DEFAULT: '#FFFFFF', // Fond clair
          dark: '#0D1117', // Fond sombre (style GitHub dark)
        },
        text: {
          DEFAULT: '#000000',
          light: '#333333',
          dark: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
