// https://firebase.google.com/docs/web/modular-upgrade

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyC1GuTQ3GvDTy_tPD6CaN18yhgrJDM3BfM',
    authDomain: 'whatsapp-clone-18.firebaseapp.com',
    projectId: 'whatsapp-clone-18',
    storageBucket: 'whatsapp-clone-18.appspot.com',
    messagingSenderId: '963981080137',
    appId: '1:963981080137:web:8ecfb53d023fc5d047f198',
    measurementId: 'G-TS6EH9XQEG',
};

// Initialize Firebase
console.log('firebase', firebase);

firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export default db;
