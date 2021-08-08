import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDOeJ4DdN4manFiTyeS_rF97oJobViicyo",
  authDomain: "unichat-c3a2d.firebaseapp.com",
  projectId: "unichat-c3a2d",
  storageBucket: "unichat-c3a2d.appspot.com",
  messagingSenderId: "656013973171",
  appId: "1:656013973171:web:ee1dccb04259458dfac2c6"
}).auth();