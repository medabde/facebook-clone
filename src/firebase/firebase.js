import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkiPKjJAg5xBoGxqzegPgVMJ6pbkbUioA",
  authDomain: "facebook-clone-a2f66.firebaseapp.com",
  projectId: "facebook-clone-a2f66",
  storageBucket: "facebook-clone-a2f66.appspot.com",
  messagingSenderId: "539500710843",
  appId: "1:539500710843:web:402f797205538547b2129e",
  measurementId: "G-72HXZ8824T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;