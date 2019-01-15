import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDsUnrs7ImkHviaXLd3lzUomVYb4dJBvXo",
  authDomain: "treasure-project.firebaseapp.com",
  databaseURL: "https://treasure-project.firebaseio.com",
  projectId: "treasure-project",
  storageBucket: "treasure-project.appspot.com",
  messagingSenderId: "964864427268"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
