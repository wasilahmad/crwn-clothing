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

// method to save user information into firestore

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error) {
            console.log('error creating user', error);
        }
    }

    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;