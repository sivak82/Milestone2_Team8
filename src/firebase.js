// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARWvzvprvYCx2YB6j1Q2T9jm9c8OMYLck",
  authDomain: "lab6-9f1b9.firebaseapp.com",
  projectId: "lab6-9f1b9",
  storageBucket: "lab6-9f1b9.appspot.com",
  messagingSenderId: "254953212025",
  appId: "1:254953212025:web:bc1c2062d433da5214eca8"
};

// Initialize Firebase
const sportsapp = initializeApp(firebaseConfig);

export const auth = getAuth(sportsapp);
export default sportsapp;