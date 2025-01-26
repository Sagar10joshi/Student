// Starting the assignment 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqpksr5sLf1lIIMlYoSibBB6MBVQLLOK8",
  authDomain: "student-34336.firebaseapp.com",
  projectId: "student-34336",
  storageBucket: "student-34336.firebasestorage.app",
  messagingSenderId: "400850052517",
  appId: "1:400850052517:web:8eeeb847648b66eeeab44c",
  measurementId: "G-GXXWG3287Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);