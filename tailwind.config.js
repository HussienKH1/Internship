/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#3BB6DA',      // from your logo
        accent: '#459DB0',       // blue-gray accent
        light: '#e6faff',        // light background
        dark: '#0d1b2a',         // navbar background
      }
    },
  },
  plugins: [],
}
