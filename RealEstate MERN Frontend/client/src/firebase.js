// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1141.firebaseapp.com",
  projectId: "mern-estate-1141",
  storageBucket: "mern-estate-1141.appspot.com",
  messagingSenderId: "917324972874",
  appId: "1:917324972874:web:06e340d7f884295a03b7b3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
