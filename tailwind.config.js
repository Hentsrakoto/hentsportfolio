/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Permet d’activer le mode sombre via une classe .dark sur <html> ou <body>
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Merriweather"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
        journal: ['"Old Standard TT"', '"Playfair Display"', 'serif'],
      },
      colors: {
        // 🎨 Palette NYT (Noir et blanc simple)
        primary: {
          DEFAULT: '#000000', // Noir strict
          light: '#333333',   // Gris sombre
          dark: '#E5E5E5',    // Blanc cassé pour dark-mode primary
        },
        secondary: {
          DEFAULT: '#555555', // Gris moyen
          light: '#777777',   // Gris plus clair
          dark: '#A3A3A3',    // Gris pour dark-mode secondary
        },
        background: {
          DEFAULT: '#F9FAFB', // Fond très clair, style papier
          dark: '#121212',    // Fond sombre
        },
        text: {
          DEFAULT: '#111827', // Presque noir pour lisibilité (light mode)
          light: '#4B5563',   // Gris texte (light mode)
          dark: '#F3F4F6',    // Blanc cassé pour lisibilité (dark mode)
        },
      },
    },
  },
  plugins: [],
}
