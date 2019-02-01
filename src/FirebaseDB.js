import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCGMgtw0_Itu9g0t8fz3fuG-8bjFG0JtQA",
    authDomain: "waven-backend.firebaseapp.com",
    databaseURL: "https://waven-backend.firebaseio.com",
    projectId: "waven-backend",
    storageBucket: "waven-backend.appspot.com",
    messagingSenderId: "928982945551"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;