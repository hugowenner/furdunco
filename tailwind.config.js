/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Garante que o Tailwind analise todos os seus arquivos de componentes
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50:  '#f7f2ef', // Um bege muito claro, quase branco
          100: '#e8e0d9', // Bege claro para fundos de seção
          200: '#d9cebf', // Bege um pouco mais escuro
          300: '#c2b09e', // Tom de areia/cáqui
          400: '#a58d76', // Marrom médio claro, bom para ícones ou textos secundários
          500: '#8c715A', // Marrom principal, equilibrado
          600: '#755b47', // Marrom mais escuro e rico
          700: '#5e4838', // Marrom escuro para textos principais e títulos
          800: '#4a382b', // Marrom muito escuro, para rodapés
          900: '#3c2e22', // Marrom quase preto
        },
      },
    },
  },
  plugins: [],
}