/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,svelte,ts,vue}",
    "./node_modules/flowbite/**/*.js", // Agrega esta línea
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Agrega Flowbite como plugin
  ],
};
