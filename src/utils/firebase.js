// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaYXRTPPhgMbVeqAw2u2WJ5efEGx59jLc",
  authDomain: "netflixgpt-97.firebaseapp.com",
  projectId: "netflixgpt-97",
  storageBucket: "netflixgpt-97.appspot.com",
  messagingSenderId: "280971876980",
  appId: "1:280971876980:web:c62f9c632cc8e7be434f21",
  measurementId: "G-NPHVLMQRWM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
