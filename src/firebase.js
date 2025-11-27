// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRnBTrpFBLOHEEHbtt-033cd6HHkT9T34",
  authDomain: "indytech-e90c2.firebaseapp.com",
  projectId: "indytech-e90c2",
  storageBucket: "indytech-e90c2.firebasestorage.app",
  messagingSenderId: "1044832278782",
  appId: "1:1044832278782:web:39f41de2a670bd8c9b6daf",
  measurementId: "G-VV5WDKRNDQ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
