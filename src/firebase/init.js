import firebase from 'firebase/app';
/* eslint-disable-next-line */
import firestore from 'firebase/firestore';
// Initialize Firebase
const config = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
 

};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({
  timestampsInSnapshots: true
});

export default firebaseApp.firestore();
