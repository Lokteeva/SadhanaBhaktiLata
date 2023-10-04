import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDknqQ3uiAXOqQGL_dIfz4P--oh4j-bkMw",
  authDomain: "blog-d866c.firebaseapp.com",
  projectId: "blog-d866c",
  storageBucket: "blog-d866c.appspot.com",
  messagingSenderId: "1063565645469",
  appId: "1:1063565645469:web:d409b6f30d9e647f476674"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

//авторизация
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getAuth(app);

