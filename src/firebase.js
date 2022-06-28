import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBhaSoIuftdrq2h8bmHOhdp6vt-pN0plj8',
  authDomain: 'clone-4756d.firebaseapp.com',
  projectId: 'clone-4756d',
  storageBucket: 'clone-4756d.appspot.com',
  messagingSenderId: '560326895494',
  appId: '1:560326895494:web:9cc138c33e959820232e07',
  measurementId: 'G-DX61HW8EFX',
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
