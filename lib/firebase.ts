// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3V-3DYvqHO-N8h_jgE1nNP6fZOwIpOOM",
  authDomain: "greek-points.firebaseapp.com",
  projectId: "greek-points",
  storageBucket: "greek-points.appspot.com",
  messagingSenderId: "677204800688",
  appId: "1:677204800688:web:6231ef851a6e84c8a6b775",
  measurementId: "G-HYKHV8R9YB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);