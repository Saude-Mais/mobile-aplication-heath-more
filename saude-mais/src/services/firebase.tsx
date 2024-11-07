// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvVEvIHw-g9KC1asyvbHlOhAPxoj2bEFg",
  authDomain: "health-more-9b8ae.firebaseapp.com",
  projectId: "health-more-9b8ae",
  storageBucket: "health-more-9b8ae.firebasestorage.app",
  messagingSenderId: "189160006135",
  appId: "1:189160006135:web:b65ebb35eec7e8b1908ef2",
  measurementId: "G-N57WB251LT"
};

// Initialize Firebase
const App_ = initializeApp(firebaseConfig);
const Auth = getAuth(App_);
const DB   = getFirestore(App_);

export { Auth, App_ , DB };
