// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBv9FRd2JaNz4lZssae9LUO7kvJkI3VNg",
  authDomain: "waterism-be.firebaseapp.com",
  projectId: "waterism-be",
  storageBucket: "waterism-be.appspot.com",
  messagingSenderId: "669828744",
  appId: "1:669828744:web:6b7f9bf2b35cd3c57f013d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
