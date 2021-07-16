import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsgvwI6qNNtKWvOeFZEWNHBZofcExKc6s",
  authDomain: "docs-clone-romana.firebaseapp.com",
  projectId: "docs-clone-romana",
  storageBucket: "docs-clone-romana.appspot.com",
  messagingSenderId: "53526515007",
  appId: "1:53526515007:web:c0cf0e87fc4a0e29c0178a",
};

const app = !firebase.apps.length
  ? firebase.initializeapp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export { db };
