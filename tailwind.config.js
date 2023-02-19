/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/public/img/background.svg')",
        'logo': "url('/public/img/logo.svg')",
      },
      colors: {
        primary: "#D9D9D9",
        secondary: "#C02328"
      },
    },
  },
  plugins: [],
}
