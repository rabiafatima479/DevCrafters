/** @type {import('tailwindcss').Config} */
export default {
  // 'class' mode enable karein taaki documentElement ki class work kare
  darkMode: ["class"], 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#49A9B1", // Aapka primary color
      },
    },
  },
  plugins: [],
}