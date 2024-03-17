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
        primaryGray: '#4D4D4D'
      }

    },
  },
  plugins: [],
  darkMode: 'class',
}
  