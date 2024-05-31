import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

const firestoreConfig = getFirestore(app);

export { firestoreConfig };
