// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdOK_tpy7Vx3I1BJc1wuatw0hsMX3Lzqk",
  authDomain: "fir-authentication-react-8e97c.firebaseapp.com",
  projectId: "fir-authentication-react-8e97c",
  storageBucket: "fir-authentication-react-8e97c.firebasestorage.app",
  messagingSenderId: "124187726094",
  appId: "1:124187726094:web:333c147613a425ad02075f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);