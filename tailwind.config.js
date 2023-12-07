/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // 'Inter' nomli fontni o'rnating
        serif: ['Georgia', 'serif'], // Serif nomli fontni o'rnating
        monserat: ['Montserrat', 'monospace'], // Mono nomli fontni o'rnating
        // Boshqa fontlar uchun ham o'zgartirishlar qiling
      },
    },
  },
  plugins: [],
}

