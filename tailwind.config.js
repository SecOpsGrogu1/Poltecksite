/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
