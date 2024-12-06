// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALfMGjXbPu2qLj3BsRLh4Vuy1Y7Z4K_2Q",
  authDomain: "moviecraze-client-auth.firebaseapp.com",
  projectId: "moviecraze-client-auth",
  storageBucket: "moviecraze-client-auth.firebasestorage.app",
  messagingSenderId: "1088856957057",
  appId: "1:1088856957057:web:3d3490a7efe7ce765e6d80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
