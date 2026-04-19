<!-- Create netflix steps-->
npx create-react-app netflix-gpt
added tailwind
created header along with basic browser routers
login form
signup form
build form in react using FORMIK lib
form validation and useRef
firebase setup
authentication - create sign up/sign in user account
create redux store user slice



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

  firebase
  https://firebase.google.com/
  Go to console on the website
  select option 'create a new firebase option' -> create a name -> continue -> select default account for firebase
  we need to add web app to created firebase -> setup firebase hosting -> we get api key which we saved in firebase.js inside utils
  in our project -> npm install firebase
  in firebase project -> click on 'authentication' -> get started -> add sign in method(email/password added)
  in our project -> deploy app -> firebase install -g firebase-tools -> firebase login -> firebase init -> options u get 1- set up firebase locally 2-use an existing project -> select our project name -> 3- what do u want to use as your public directory? build  (as it is wzcreate-react-app give name as build)-> configure as single app? no -> set up automatic build and deploys into Github ? no -> npm run build (when we are writing build then we r telling firebase that you have to deply using this build folder)
  to deploy app command -> firebase deploy




  