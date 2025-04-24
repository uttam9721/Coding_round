// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBsUS6VA1M8A_tCWNGDtPdzbSKMqs9WbGY",
  authDomain: "sampleapp-69033.firebaseapp.com",
  projectId: "sampleapp-69033",
  storageBucket: "sampleapp-69033.appspot.com",
  messagingSenderId: "344199063074",
  appId: "1:344199063074:web:9629fd175a8a1c66c7cc7b",
  measurementId: "G-SEQ59QZFWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export the authentication object
export const auth = getAuth(app);
