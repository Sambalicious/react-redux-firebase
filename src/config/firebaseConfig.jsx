 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';

 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC8htroOP_kTEBOLiPI3BIYNGlSPlz7Hmw",
    authDomain: "leggo-app-59281.firebaseapp.com",
    databaseURL: "https://leggo-app-59281.firebaseio.com",
    projectId: "leggo-app-59281",
    storageBucket: "leggo-app-59281.appspot.com",
    messagingSenderId: "98684384982",
    appId: "1:98684384982:web:b739d3b17a72d7c09abb77",
    measurementId: "G-RP2Q9YXWMF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.firestore().settings({timestampsInSnapshots: true});


  export default firebase;