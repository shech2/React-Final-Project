import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
    apiKey: "AIzaSyDbZGspaOjLd-_zvSqeSUR7Fin1QhvuipQ",
    authDomain: "efi-test-f7212.firebaseapp.com",
    projectId: "efi-test-f7212",
    storageBucket: "efi-test-f7212.appspot.com",
    messagingSenderId: "31963996025",
    appId: "1:31963996025:web:d43639c1f18383a95fd9a8",
    measurementId: "G-W3CRJLKY10"
});

export const Auth = getAuth(app);

export default app;