 import Firebase from 'firebase';
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDGpvAsmEKXHqLrGpjP5yvNWA7dx0b0-kM",
    authDomain: "e-commerce-b6d00.firebaseapp.com",
    databaseURL: "https://e-commerce-b6d00.firebaseio.com",
    projectId: "e-commerce-b6d00",
    storageBucket: "e-commerce-b6d00.appspot.com",
    messagingSenderId: "414520308658"
  };
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu');
export const dbOrdersRef = db.ref('orders');