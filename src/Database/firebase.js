//extract the funtionality given by firebase.
// Import the functions you need from the SDKs you need

//initialize was provided by firebase to get the project started.
import { initializeApp } from "firebase/app";

//import getFirestore to use the cloudStore firestore from firebase
import { getFirestore } from "firebase/firestore"

//import getAuth to use the login authentication function in firebase.
import { getAuth } from "firebase/auth";


import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb2FuyHIXwhHv_nIiq0RgUSMT-8NLEY3M",
  authDomain: "rtu-apparel.firebaseapp.com",
  projectId: "rtu-apparel",
  storageBucket: "rtu-apparel.appspot.com",
  messagingSenderId: "815024621103",
  appId: "1:815024621103:web:2ab988943d25cda6a4e8da",
  measurementId: "G-V5RXH8EYB0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//authentication for login/sign up
export const auth = getAuth(app)

//database for our all data.
export const db = getFirestore(app)

const analytics = getAnalytics(app);