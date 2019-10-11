import firebase from 'firebase/app';
/* eslint-disable-next-line */
import firestore from 'firebase/firestore';
// Initialize Firebase
const config = {
  apiKey: "AIzaSyBnQDQSxCRNOq3d9VL1UHV4G_tnSs_2uHE",
  authDomain: "vue-real-time-chat-4eb35.firebaseapp.com",
  databaseURL: "https://vue-real-time-chat-4eb35.firebaseio.com",
  projectId: "vue-real-time-chat-4eb35",
  storageBucket: "vue-real-time-chat-4eb35.appspot.com",
  messagingSenderId: "605612137242",
  appId: "1:605612137242:web:766d92b464641b04"
  // apiKey: "AIzaSyDyrNiO5XOaM0gaYovnUBbwLqNFbbKBywQ",
  // authDomain: "vuechat-73c0e.firebaseapp.com",
  // databaseURL: "https://vuechat-73c0e.firebaseio.com",
  // projectId: "vuechat-73c0e",
  // storageBucket: "",
  // messagingSenderId: "664367395628",
  // appId: "1:664367395628:web:7e5355575fdbe3bb"

};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({
  timestampsInSnapshots: true
});

export default firebaseApp.firestore();
