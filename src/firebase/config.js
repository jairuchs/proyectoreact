// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpINprZz9mJyMHizGw64dLWAPiy0uPBnk",
  authDomain: "proyecto-react-d7251.firebaseapp.com",
  projectId: "proyecto-react-d7251",
  storageBucket: "proyecto-react-d7251.appspot.com",
  messagingSenderId: "919184970790",
  appId: "1:919184970790:web:1e1e77c6bd82ecd02ac2e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)