/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#399F2E',
        secondary: "#FFF4ED",
        tertiary: '#3D3D3D',

      }
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2rem",
        xl: "4rem",
      },
    },
  },
  plugins: [
  ],
}

