

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "eb-garamond": ["EB Garamond", "serif"]
      },
      colors: {
        "lawHub-primary": "#B68C5A",
        "lawHub-heading": "#414040",
        "lawHub-secondary": "#707070",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

