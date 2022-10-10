// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArLleRlm06a-aFM53ousCUkHuOcYqA3Pg",
  authDomain: "rumah-ramah.firebaseapp.com",
  projectId: "rumah-ramah",
  storageBucket: "rumah-ramah.appspot.com",
  messagingSenderId: "221414450258",
  appId: "1:221414450258:web:e47b4e4a17e66eac736b8b",
  measurementId: "G-C0M37WDVZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()