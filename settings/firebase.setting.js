// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpvwkahYXy-Q67y6VjFGwWh_dMOcfvaEQ",
  authDomain: "facepal-e014d.firebaseapp.com",
  projectId: "facepal-e014d",
  storageBucket: "facepal-e014d.appspot.com",
  messagingSenderId: "928223672055",
  appId: "1:928223672055:web:c4677e173e97b4943345f2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const db = getFirestore(app);

export { authentication,db }