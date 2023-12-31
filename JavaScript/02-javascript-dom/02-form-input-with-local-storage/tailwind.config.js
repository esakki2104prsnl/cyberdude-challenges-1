/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./all_details.html",
    "./assets/js/main.js",
    "./assets/js/utils.js",
    "./assets/js/patientTableList.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Sen': 'Sen'
      }
    },
  },
  plugins: [],
}