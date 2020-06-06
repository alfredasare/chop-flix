import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyBK2KlUYT8pVvu9ripZwZtyTmxeHgO7Tx8",
    authDomain: "chop-flix.firebaseapp.com",
    databaseURL: "https://chop-flix.firebaseio.com",
    projectId: "chop-flix",
    storageBucket: "chop-flix.appspot.com",
    messagingSenderId: "475726840638",
    appId: "1:475726840638:web:960aae0f822f84a153a26f",
    measurementId: "G-M83G6Y2L8H"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

//  Google Auth Utility
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

//  Auth Utility Functions

//  Adding auth users to Firebase
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const {displayName, email, photoURL} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                profileImg: photoURL
            });
        } catch (e) {
            console.log(`Error creating user: ${e.message}`)
        }
    }

    return userRef;
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

export default firebase;