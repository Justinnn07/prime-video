import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL6SQXi-FOJ_DajwVRWCzzf7Sr1I42yC4",
  authDomain: "prime-video1.firebaseapp.com",
  projectId: "prime-video1",
  storageBucket: "prime-video1.appspot.com",
  messagingSenderId: "44779863870",
  appId: "1:44779863870:web:83fabd4662327ecf4c366f",
  measurementId: "G-T6W8Z41V8S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
