// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJjxlvRd_l3uqgYo5nGLESf6X26lO6CJY",
  authDomain: "ai-travel-planner-7fd86.firebaseapp.com",
  projectId: "ai-travel-planner-7fd86",
  storageBucket: "ai-travel-planner-7fd86.firebasestorage.app",
  messagingSenderId: "539349030698",
  appId: "1:539349030698:web:e02520005a5fcb24713053",
  measurementId: "G-1HJXR9JF0Q"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app)
 //const analytics = getAnalytics(app);