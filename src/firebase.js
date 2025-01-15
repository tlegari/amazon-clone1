import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCaDFXmN_n1LccOaM0WxL3otTJvnAYn8mk",
    authDomain: "clone-619c2.firebaseapp.com",
    projectId: "clone-619c2",
    storageBucket: "clone-619c2.firebasestorage.app",
    messagingSenderId: "763247636312",
    appId: "1:763247636312:web:66aa2780125fa3e8763f2d",
    measurementId: "G-EKQ6TJE3VK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};