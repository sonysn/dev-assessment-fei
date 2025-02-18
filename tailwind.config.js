/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customPurple: "#F8EAFF",
        textPurple: "#61227D",
        textGrey: "#5E5E5E"
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        noto: ['Noto Sans', 'sans-serif'],
      },
    }
  },
  plugins: []
}
