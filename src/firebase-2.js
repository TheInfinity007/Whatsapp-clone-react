import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

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

/*

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

*/

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

// Initialize Firebase Authentication and get a reference to the service
// const auth = firebaseApp.auth();
const auth = getAuth(firebaseApp);

// Initialize Firebase Authentication and get a reference to the service
const provider = new GoogleAuthProvider();
// const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;


// https://youtu.be/pUxrDcITyjg?t=7068