import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBjhl9oe-myBXjAzBTjmPqa_hZPLloHfxY",
  authDomain: "crwn-ecom-9794d.firebaseapp.com",
  projectId: "crwn-ecom-9794d",
  storageBucket: "crwn-ecom-9794d.appspot.com",
  messagingSenderId: "503565325773",
  appId: "1:503565325773:web:149d4563a27b46c3816084",
  measurementId: "G-BKYGEYRZ9W",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error(err);
      console.log("Error creating user");
    }
  }

  console.log(userRef);

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account " });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
