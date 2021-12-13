
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "@firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFPCXQVryDF95h1GgdBwYF_Ne5CuiUtu0",
  authDomain: "sprintas-851f6.firebaseapp.com",
  projectId: "sprintas-851f6",
  storageBucket: "sprintas-851f6.appspot.com",
  messagingSenderId: "123630502118",
  appId: "1:123630502118:web:d032a7a65e85a8b356bb27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
    app,
    google,
    facebook,
    db
}