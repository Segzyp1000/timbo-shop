/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navColor: 'rgba(44, 62, 80, 1)',
        navText: 'rgba(46, 204, 113, 0.8)',
        productColor: 'rgba(245, 245, 245, 1)',
        pictureBackground: 'rgba(245, 245, 245, 1)',
        categoryColor: 'rgba(44, 62, 80, 1)',
        buttonBackground: 'rgba(46, 204, 113, 1)'



      }
    },
  },
  plugins: [],
}