// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuFZQaOF3RT0VvXjYsrVDtUo8BayLRoeM",
  authDomain: "netflix-gpt-new-9580d.firebaseapp.com",
  projectId: "netflix-gpt-new-9580d",
  storageBucket: "netflix-gpt-new-9580d.firebasestorage.app",
  messagingSenderId: "429633028527",
  appId: "1:429633028527:web:1b7abb7c4cd8655939ef5a",
  measurementId: "G-0L9STC721V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();