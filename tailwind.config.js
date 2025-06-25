/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50:  '#f7f2ef',
          100: '#e8e0d9',
          200: '#d9cebf',
          300: '#c2b09e',
          400: '#a58d76',
          500: '#8c715A',
          600: '#755b47',
          700: '#5e4838',
          800: '#4a382b',
          900: '#3c2e22',
        },
      }, // <-- UMA VÍRGULA É ADICIONADA AQUI PARA SEPARAR

      // A NOVA SEÇÃO DE FONTES É ADICIONADA AQUI
      fontFamily: {
        'slab': ['"Roboto Slab"', 'serif'],
        'lora': ['"Lora"', 'serif'],
      },
    },
  },
  plugins: [],
}