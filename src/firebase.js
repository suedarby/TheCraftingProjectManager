import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// updated to my Firebase Config details for Crafting PM instance
const firebaseConfig = {
 
    apiKey: "AIzaSyCIyZnXpjje_FIiztLI03zXysgBP8A0G0c",
    authDomain: "crafting-pm.firebaseapp.com",
    projectId: "crafting-pm",
    storageBucket: "crafting-pm.appspot.com",
    messagingSenderId: "858385904193",
    appId: "1:858385904193:web:f7d2acd04ddc8d1246ccc0"
  };
  

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();


export {db, auth, provider};