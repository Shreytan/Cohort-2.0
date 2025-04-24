/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
            blue:{
                700: '#01274f',
                400:"#18385e",
                200:"#6989af"
            },
            green : {
                500: '#3ddac9',
            }
        }
      },
    },
    plugins: [],
  }