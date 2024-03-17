/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: "#e6e6e6",
        darkslategray: "#454545",
        dimgray: "rgba(91, 77, 77, 0.31)",
      },
      spacing: {
        "spacing-xs": "8px",
        "spacing-s": "24px",
        "spacing-m": "48px",
      },
      fontFamily: {
        subheading: "Inter",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  darkMode: 'class',
}
  