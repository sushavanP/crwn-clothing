import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAmiWyeZmtLylcV9pFp-ZDPWjdqt4otwcg",
  authDomain: "crwn-db-814d7.firebaseapp.com",
  databaseURL: "https://crwn-db-814d7.firebaseio.com",
  projectId: "crwn-db-814d7",
  storageBucket: "crwn-db-814d7.appspot.com",
  messagingSenderId: "247683664400",
  appId: "1:247683664400:web:98d793a90fb09a3cd11895",
  measurementId: "G-BDY8K1W5E3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;