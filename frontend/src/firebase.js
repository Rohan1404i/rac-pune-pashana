// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdbowiwUCl8iWEKxEZSW31P0s3JmkGA-w",
  authDomain: "pune-pashan.firebaseapp.com",
  projectId: "pune-pashan",
  storageBucket: "pune-pashan.appspot.com",
  messagingSenderId: "227491421525",
  appId: "1:227491421525:web:4ae1551628b477920b63dc",
  measurementId: "G-9YTM836E3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseDb = getFirestore(app);

export const storage = getStorage(); 

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDdbowiwUCl8iWEKxEZSW31P0s3JmkGA-w",
//   authDomain: "pune-pashan.firebaseapp.com",
//   projectId: "pune-pashan",
//   storageBucket: "pune-pashan.appspot.com",
//   messagingSenderId: "227491421525",
//   appId: "1:227491421525:web:4ae1551628b477920b63dc",
//   measurementId: "G-9YTM836E3E"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);