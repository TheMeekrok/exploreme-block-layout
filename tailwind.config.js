/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': '#FAFAFA',
        'custom-blue': '#1058C3',
        'custom-grey': '#707070',
        'salad': '#78DBB2',
        'light-grey': '#DADADA',
        'solid-grey': '#747474'
      },
      fontFamily: {
        'menu': ['Anek Tamil', 'sans-serif']
      },
      gridTemplateColumns: {
        'signatures': 'repeat(auto-fill, minmax(28px, 1fr));'
      }
    },
  },
  plugins: [],
}
