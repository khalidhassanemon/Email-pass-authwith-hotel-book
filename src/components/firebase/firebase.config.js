// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFEh70mgK4S88HzNyEOuRlEsdVafGJlC4",
  authDomain: "email-pass-auth-for-hotel-book.firebaseapp.com",
  projectId: "email-pass-auth-for-hotel-book",
  storageBucket: "email-pass-auth-for-hotel-book.appspot.com",
  messagingSenderId: "459732888603",
  appId: "1:459732888603:web:3fa8fc5749c6f816ee9cbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;