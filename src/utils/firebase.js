// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.KEY ,
  authDomain: "jaysenergy-bd670.firebaseapp.com",
  projectId: "jaysenergy-bd670",
  storageBucket: "jaysenergy-bd670.appspot.com",
  messagingSenderId: "141462912566",
  appId: "1:141462912566:web:f718ffef2b845c137ca297",
  measurementId: "G-DBZ402ZEP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);