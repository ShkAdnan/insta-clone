// Import the functions you need from the SDKs you need
import { initializeApp, getApp , getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtYhPtnFKgzuaxIjJgKf9a5w_bVRNmdZA",
  authDomain: "insta-7117a.firebaseapp.com",
  projectId: "insta-7117a",
  storageBucket: "insta-7117a.appspot.com",
  messagingSenderId: "1064614745637",
  appId: "1:1064614745637:web:7c61ef8f83c778d3b111cc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }