import firebase from 'firebase/app';
import 'firebase/firestore'; // to access database
import 'firebase/auth'; // to access auth services

const firebaseConfig = {
    apiKey: "AIzaSyBHR8HZDjf0QwpkWFO6INJah1XkC57L51s",
    authDomain: "crwn-db-952ff.firebaseapp.com",
    databaseURL: "https://crwn-db-952ff.firebaseio.com",
    projectId: "crwn-db-952ff",
    storageBucket: "crwn-db-952ff.appspot.com",
    messagingSenderId: "375950129391",
    appId: "1:375950129391:web:2e5ea67e1b6cb1bf43c31a",
    measurementId: "G-Y827XXCWHK"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;