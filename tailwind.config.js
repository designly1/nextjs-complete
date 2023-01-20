/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d4eef9",
          200: "#a9ddf4",
          300: "#7fcdee",
          400: "#54bce9",
          500: "#29abe3",
          600: "#2189b6",
          700: "#196788",
          800: "#10445b",
          900: "#08222d"
        },
        secondary: {
          100: "#d9e1f4",
          200: "#b3c3e9",
          300: "#8ca4de",
          400: "#6686d3",
          500: "#4068c8",
          600: "#3353a0",
          700: "#263e78",
          800: "#1a2a50",
          900: "#0d1528"
        },
        'menu-item-hover': '#e8e807'
      },
      fontFamily: {
        'inter': 'Inter'
      },
      animation: {
        'bounceLight': 'bounceLight 2s ease-in-out infinite'
      },
      keyframes: {
        bounceLight: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'none' },
        }
      }
    },
  },
  plugins: [],
}
