module.exports = {
  mode: 'jit',
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./public/**/*.html",
  ],
  darkMode: 'class', // or 'media' or 'class'
  presets: [
    require('./utils/tailwind-preset'),
    require("flowbite/plugin")
  ],
};
