// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVZ_EE0NRW_5PuVLBnXRwiOtnp5-8PSzE",
  authDomain: "arsenal-2-6372e.firebaseapp.com",
  projectId: "arsenal-2-6372e",
  storageBucket: "arsenal-2-6372e.firebasestorage.app",
  messagingSenderId: "591646968169",
  appId: "1:591646968169:web:25ff7c29024b1a1c4295f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);