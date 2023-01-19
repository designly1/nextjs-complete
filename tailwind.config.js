/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#29abe3',
        'primaryDark': '#3829e3',
        'logo': '#edebeb',
        'bg1': '#4c05b0',
      },
      fontFamily: {
        'inter': 'Inter'
      }
    },
  },
  plugins: [],
}
