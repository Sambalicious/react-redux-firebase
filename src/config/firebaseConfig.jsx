 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';

 
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyC7IO-g1o1UtIfMZARFwcCA0Rl8c0NOh4E",
  authDomain: "learning-49ebe.firebaseapp.com",
  databaseURL: "https://learning-49ebe.firebaseio.com",
  projectId: "learning-49ebe",
  storageBucket: "learning-49ebe.appspot.com",
  messagingSenderId: "112586602776",
  appId: "1:112586602776:web:af27e2c8a12e54717d066d",
  measurementId: "G-JHHZZFPFQK"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();



  export default firebase;