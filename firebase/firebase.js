// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1M6-jdVRJXnCqPapXXVdyy7fUY3bMh5s",
  authDomain: "nextjs-twitter-cfe6a.firebaseapp.com",
  projectId: "nextjs-twitter-cfe6a",
  storageBucket: "nextjs-twitter-cfe6a.appspot.com",
  messagingSenderId: "622035504537",
  appId: "1:622035504537:web:8c6e1db6b8147665891708",
  measurementId: "G-5CPV56LEG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);