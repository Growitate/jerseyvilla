/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jv: {
          cream: "#F6F4EE",
          "cream-light": "#FAF8F3",
          "cream-dark": "#ECE7DD",
          "cream-border": "#E3DDD0",
          navy: "#0A192F",
          "navy-dark": "#061122",
          "navy-light": "#11253E",
          "navy-card": "#0D1F38",
          gold: "#D4AF37",
          badge: "#0A192F"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Bebas Neue', 'Oswald', 'Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
