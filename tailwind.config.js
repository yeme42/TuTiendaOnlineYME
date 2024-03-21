/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "pages/**/*.{html,ts}",
    "components/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors:{
        primary:"#5c259b",
        secondary:"#1E293B",
        danger:"#F00",
        accent:"#CB5930"
  }
},
  },
  plugins: [],
}

