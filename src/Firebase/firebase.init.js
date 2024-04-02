// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJl24q6e8Rni_FVvwSGBP7Ad6P0LeUVcM",
  authDomain: "react-and-firebase-efb13.firebaseapp.com",
  projectId: "react-and-firebase-efb13",
  storageBucket: "react-and-firebase-efb13.appspot.com",
  messagingSenderId: "529710431241",
  appId: "1:529710431241:web:b8e2b3c48ba529e1fe0cd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
