// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMC-6CUlbT46ssEoKDyq37Dzcrs-mRDH4",
  authDomain: "library-cb6f7.firebaseapp.com",
  projectId: "library-cb6f7",
  storageBucket: "library-cb6f7.appspot.com",
  messagingSenderId: "408464355758",
  appId: "1:408464355758:web:c122d605f1ebb31364d83f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth =getAuth(app);