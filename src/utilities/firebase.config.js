// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClOvPwYlpwVQ7fvWLYM-f7u6Ro7Oo4IWc",
  authDomain: "fir-auth-with-context-23337.firebaseapp.com",
  projectId: "fir-auth-with-context-23337",
  storageBucket: "fir-auth-with-context-23337.appspot.com",
  messagingSenderId: "661528121384",
  appId: "1:661528121384:web:8ca4ac1ba219b8b491251d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;