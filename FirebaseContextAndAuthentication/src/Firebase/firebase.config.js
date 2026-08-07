// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASlOXIuuXlQn_GfwUkIVbuWy9RJG-Oo8c",
  authDomain: "fir-context-8aba6.firebaseapp.com",
  projectId: "fir-context-8aba6",
  storageBucket: "fir-context-8aba6.firebasestorage.app",
  messagingSenderId: "749865372542",
  appId: "1:749865372542:web:ad84053b6818ae1450412f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);