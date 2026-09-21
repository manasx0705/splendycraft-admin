import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD74x94J160Oa5n2usdwTvKeuWfTmu8ElY",
  authDomain: "splendycraft-admin.firebaseapp.com",
  projectId: "splendycraft-admin",
  storageBucket: "splendycraft-admin.firebasestorage.app",
  messagingSenderId: "505249922752",
  appId: "1:505249922752:web:85dff5aae9cd584a5c7725",
  measurementId: "G-8Y1NZ1X7ES"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
