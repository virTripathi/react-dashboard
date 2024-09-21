/** @type {import('tailwindcss').Config} */


const withMT = require("@material-tailwind/react/utils/withMT");
const { RiFontFamily } = require('react-icons/ri');
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans':'"Roboto", sans-serif'
      },
      height: {
        '1/10': '10%',
      }
    },
  },
  plugins: [],
});

