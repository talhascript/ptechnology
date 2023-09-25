// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth, getFirestore } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrnoTv8Mw-Ma6ki9StDlEs33xDaLicbss",
  authDomain: "ptechnology-2f9d4.firebaseapp.com",
  projectId: "ptechnology-2f9d4",
  storageBucket: "ptechnology-2f9d4.appspot.com",
  messagingSenderId: "558625851142",
  appId: "1:558625851142:web:3e35c0dfc533fbeaa70087",
  measurementId: "G-59WLZKYP4P"
};

// Initialize Firebase
const app = getApps().length ? getApps() : initializeApp(firebaseConfig);
const auth = getAuth();
// ​​const db = getFirestore(app);


export {app, auth}
