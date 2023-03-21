// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpEgZ4EmfEL5nn4jlz8ElXABbIEF1Rnwc",
  authDomain: "dynamic-grocery-app.firebaseapp.com",
  projectId: "dynamic-grocery-app",
  storageBucket: "dynamic-grocery-app.appspot.com",
  messagingSenderId: "81022263522",
  appId: "1:81022263522:web:db4815bceb37c9e6febebb",
  measurementId: "G-W4RSWDE6YS"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);