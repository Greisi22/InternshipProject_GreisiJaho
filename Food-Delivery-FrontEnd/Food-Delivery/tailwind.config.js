/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: '#1C1562',
        secondary: '#18A0FB',
        accent: '#EDEBFF',
        PrimaryBtn:'#0078AC',
        deepGreen: '#095E17',
        primaryGray: '#4D4D4D',
        darkBlueColor: '#03081f',
        darkYellow: '#fc8a06'
      },
      width: {
        '120': '120%',
        '140': '140%',
        '200': '200%'
      }

    },
  },
  plugins: [],
  darkMode: 'class',
}
  