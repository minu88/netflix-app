// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8KnpvtLOe9IAxg-eANLh7L6TTCuJRxsA",
  authDomain: "netflixgpt-b613f.firebaseapp.com",
  projectId: "netflixgpt-b613f",
  storageBucket: "netflixgpt-b613f.firebasestorage.app",
  messagingSenderId: "392735450111",
  appId: "1:392735450111:web:b42028f1b49d0d3d263dca",
  measurementId: "G-CM5TTFJVC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);