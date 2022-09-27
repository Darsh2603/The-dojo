import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDwexA_mlapninw6VQubsqbIs5-_gQlZps",
    authDomain: "thedojosite-e7588.firebaseapp.com",
    projectId: "thedojosite-e7588",
    storageBucket: "thedojosite-e7588.appspot.com",
    messagingSenderId: "301638114472",
    appId: "1:301638114472:web:6995ca8726c207a356b69d"
  };

 // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }