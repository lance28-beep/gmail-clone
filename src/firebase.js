import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCFISmhnZC1PiymHT2DoC0bTUU75pwk7dA',
  authDomain: 'clone-8e260.firebaseapp.com',
  projectId: 'clone-8e260',
  storageBucket: 'clone-8e260.appspot.com',
  messagingSenderId: '301056503719',
  appId: '1:301056503719:web:c4b84fa451669a721ed082',
  measurementId: 'G-MM1XQHB6Q5',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
