import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_APP_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyBqRFxyfLxwO3wj0-DHDaY4cr_jov5DbYA",
  authDomain: "movie-clone-b6a4f.firebaseapp.com",
  projectId: "movie-clone-b6a4f",
  storageBucket: "movie-clone-b6a4f.appspot.com",
  messagingSenderId: "117615650863",
  appId: "1:117615650863:web:0ebdbbeae85eee3d58feda"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)