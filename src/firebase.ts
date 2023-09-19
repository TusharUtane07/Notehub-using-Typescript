import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA1ZEmqnt5r_gXjGGCwD1vvaAY3zfqQxl8",
  authDomain: "notehub-1ec53.firebaseapp.com",
  projectId: "notehub-1ec53",
  storageBucket: "notehub-1ec53.appspot.com",
  messagingSenderId: "209269903376",
  appId: "1:209269903376:web:da112de165eed500fd3a95"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)