// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWUb-QBP32W8vbWXBgaN8NYRIsD18YwWc",
  authDomain: "phonefusion-697ec.firebaseapp.com",
  projectId: "phonefusion-697ec",
  storageBucket: "phonefusion-697ec.appspot.com",
  messagingSenderId: "349825963413",
  appId: "1:349825963413:web:6cb1bd6bbc132e2a93529c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;