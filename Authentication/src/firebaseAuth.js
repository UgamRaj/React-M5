import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEQ7MFjUWPgCplLZ_UOSGbvd5ksI9z-rI",
  authDomain: "auth-demo-d46a0.firebaseapp.com",
  projectId: "auth-demo-d46a0",
  storageBucket: "auth-demo-d46a0.appspot.com",
  messagingSenderId: "1057628238544",
  appId: "1:1057628238544:web:8be7c47875df78fa0864d5",
  measurementId: "G-TKXC1T2TR8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
