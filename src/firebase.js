
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDe6btvzqw6sdyLjagh4lCKW06fCHGujCo",
  authDomain: "instagram-clone-7454a.firebaseapp.com",
  projectId: "instagram-clone-7454a",
  storageBucket: "instagram-clone-7454a.appspot.com",
  messagingSenderId: "1004777863880",
  appId: "1:1004777863880:web:c7049ccab8643abb27c3fd"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
