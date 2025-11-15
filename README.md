<!-- Create netflix -->
npx create-react-app netflix-gpt


https://v3.tailwindcss.com/docs/installation from here go to framework guides
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

features on netflix
login/sign up page
  sign in / sign up form
  signed in redirect to brwse page
browse page
  header
  background movie play
    movie title and desc
    movie suggestions
netflixGPT
  search bar 
  movie suggestions

