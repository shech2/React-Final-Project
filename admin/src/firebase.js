// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbZGspaOjLd-_zvSqeSUR7Fin1QhvuipQ",
  authDomain: "efi-test-f7212.firebaseapp.com",
  projectId: "efi-test-f7212",
  storageBucket: "efi-test-f7212.appspot.com",
  messagingSenderId: "31963996025",
  appId: "1:31963996025:web:d43639c1f18383a95fd9a8",
  measurementId: "G-W3CRJLKY10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;