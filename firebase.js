import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "todos-588f2.firebaseapp.com",
  databaseURL: "https://todos-588f2.firebaseio.com",
  projectId: "todos-588f2",
  storageBucket: "todos-588f2.appspot.com",
  messagingSenderId: "753300593688",
  appId: "1:753300593688:web:5d8a2ae12c3a4877"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
