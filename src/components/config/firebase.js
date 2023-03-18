// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAb5xyZh7h5S8GhuZgE19wppmwuVJWUP8I",
  authDomain: "voting-system-e5aa6.firebaseapp.com",
  projectId: "voting-system-e5aa6",
  storageBucket: "voting-system-e5aa6.appspot.com",
  messagingSenderId: "178374043639",
  appId: "1:178374043639:web:97f33ea1ca06be1c1af0f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
