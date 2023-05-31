import firebase, { firestore } from 'firebase';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = FirebaseApp.firestore();

export default db;