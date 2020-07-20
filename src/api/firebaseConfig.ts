
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyDyM3_qytG3n91g7roOz79VTyIPsKrEWjE",
    authDomain: "grid-list-623ed.firebaseapp.com",
    databaseURL: "https://grid-list-623ed.firebaseio.com",
    projectId: "grid-list-623ed",
    storageBucket: "grid-list-623ed.appspot.com",
    messagingSenderId: "846069975033",
    appId: "1:846069975033:web:a2e2554371863b907b5f28"
};

const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();

export {
    fire,
    db
};