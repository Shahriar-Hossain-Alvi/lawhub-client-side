const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./public/index.html",
    flowbite.content(),
  ],
  darkMode: 'class',
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
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
}


