import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBjhl9oe-myBXjAzBTjmPqa_hZPLloHfxY",
  authDomain: "crwn-ecom-9794d.firebaseapp.com",
  projectId: "crwn-ecom-9794d",
  storageBucket: "crwn-ecom-9794d.appspot.com",
  messagingSenderId: "503565325773",
  appId: "1:503565325773:web:149d4563a27b46c3816084",
  measurementId: "G-BKYGEYRZ9W",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
