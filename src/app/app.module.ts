// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGE5fLmGMUxFCqHWcVYzCccxWWpku8Hwo",
  authDomain: "pennmac-szuch.firebaseapp.com",
  projectId: "pennmac-szuch",
  storageBucket: "pennmac-szuch.firebasestorage.app",
  messagingSenderId: "157077264480",
  appId: "1:157077264480:web:d853552ab087d53a38cb05",
  measurementId: "G-LWMB5ZZY63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };