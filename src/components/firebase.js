// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_wuCFjppmO158CcMe4693LpBhWKWPKqI",
    authDomain: "shop-f5816.firebaseapp.com",
    projectId: "shop-f5816",
    storageBucket: "shop-f5816.appspot.com",
    messagingSenderId: "841772830540",
    appId: "1:841772830540:web:74c7759c0a15b472d589e9"
};

// Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    export const provider = new GoogleAuthProvider();