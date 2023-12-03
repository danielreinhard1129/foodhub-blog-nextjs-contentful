// // /** @type {import('tailwindcss').Config} */
// import flowbite from 'flow'

// module.exports = {
//   content: [
//     "./node_modules/flowbite-react/**/*.js",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {},
//   plugins: [flowbite],
// };

import flowbite from "flowbite/plugin";

const config = {
  content: [
    "./app/**/*.{js,ts,tsx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],

  plugins: [flowbite],
};

export default config;
