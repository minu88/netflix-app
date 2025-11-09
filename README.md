<!-- Create netflix -->
npx create-react-app netflix-gpt

<!-- created tailwind config -->
npm install -D tailwindcss@3
npx tailwindcss init

<!-- in tailwind config.js -->
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

<!-- import tailwindcss in main css file -->
@tailwind base;
@tailwind components;
@tailwind utilities;