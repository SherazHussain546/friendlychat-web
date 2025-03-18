// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn7_pEsHFiZv5DwJg3T2Cpq_9ER3wh-jI",
  authDomain: "friendlychat-35b6a.firebaseapp.com",
  projectId: "friendlychat-35b6a",
  storageBucket: "friendlychat-35b6a.firebasestorage.app",
  messagingSenderId: "424011571644",
  appId: "1:424011571644:web:b48231dcd40edd45cd8bb9",
  measurementId: "G-53V2LRPTBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);