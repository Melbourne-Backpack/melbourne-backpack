// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APPID,
} from "@env";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLZhG8wXVb8_B0qX4non3ZgP4-VVqGvGw",
  authDomain: "melbourne-backpack.firebaseapp.com",
  projectId: "melbourne-backpack",
  storageBucket: "melbourne-backpack.appspot.com",
  messagingSenderId: "675237133664",
  appId: "1:675237133664:web:32110119e2d1f78fb3b205",
};

// Initialize Firebase
let app;
app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = getFirestore(app);
const storage = firebase.storage();

export { auth, db, storage };
