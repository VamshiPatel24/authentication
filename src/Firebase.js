// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIdSEiUpavWiw-h3QDtU_riYfP1bDd9oo",
  authDomain: "authentication-83e57.firebaseapp.com",
  projectId: "authentication-83e57",
  storageBucket: "authentication-83e57.firebasestorage.app",
  messagingSenderId: "714119242336",
  appId: "1:714119242336:web:dd1df9a8ae48945e8dd905",
  measurementId: "G-2ZJL3FPS5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export default app