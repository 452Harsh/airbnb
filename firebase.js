import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxvWdsTyc9JzNr--V-_6XYGjX55wHdUmw",
  authDomain: "next-todo-385b9.firebaseapp.com",
  projectId: "next-todo-385b9",
  storageBucket: "next-todo-385b9.appspot.com",
  messagingSenderId: "289682955166",
  appId: "1:289682955166:web:fe0e7a2b803ec74993548f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
