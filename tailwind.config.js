// // module.exports = {
// //   // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
// //   content: [
// //     "./src/**/*.{js,jsx,ts,tsx}",
// //   ],
// //   darkMode: false, // or 'media' or 'class'
// //   theme: {
// //     extend: {},
// //   },
// //   variants: {
// //     extend: {},
// //   },
// //   plugins: [require('daisyui')],
// // }
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// }
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
