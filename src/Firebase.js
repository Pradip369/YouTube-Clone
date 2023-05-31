import firebase, { firestore } from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCQHJHOf4b3sv6Et64MXnWBnc6o6fIUmpw",
    authDomain: "clone-36-3c2b2.firebaseapp.com",
    databaseURL: "https://clone-36-3c2b2.firebaseio.com",
    projectId: "clone-36-3c2b2",
    storageBucket: "clone-36-3c2b2.appspot.com",
    messagingSenderId: "864181351533",
    appId: "1:864181351533:web:685957b3811a6e04443b64"
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = FirebaseApp.firestore();

export default db;