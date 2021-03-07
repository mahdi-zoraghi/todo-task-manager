import firebase from "firebase/app"

import "firebase/firebase-firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC7jRgZAneBAf8oM9LmO9qozh3dI6yZfm8",
  authDomain: "todo-task-manager-b61d8.firebaseapp.com",
  projectId: "todo-task-manager-b61d8",
  storageBucket: "todo-task-manager-b61d8.appspot.com",
  messagingSenderId: "676316568534",
  appId: "1:676316568534:web:439f2907595be0a9e42277",
  measurementId: "G-Y35T769E01",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export { firebaseApp as default, db }
