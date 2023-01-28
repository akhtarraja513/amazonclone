import firebase from "firebase/compat/app" ;
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export const firebaseConfig = {
  apiKey: "AIzaSyAYaioXoRpPIJz-KE7Xopg4YQlcoj4WZ5o",
  authDomain: "clone-4cd1e.firebaseapp.com",
  projectId: "clone-4cd1e",
  storageBucket: "clone-4cd1e.appspot.com",
  messagingSenderId: "303758486019",
  appId: "1:303758486019:web:ee7a32a3786b2da5df3c36",
  measurementId: "G-W3QS0FSJ7P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth} ;