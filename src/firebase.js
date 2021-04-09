import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyD2kwax6NCxkQsGwUN-6YfmC3nSTCcb7NY',
    authDomain: 'instagram-mern-b81ba.firebaseapp.com',
    projectId: 'instagram-mern-b81ba',
    storageBucket: 'instagram-mern-b81ba.appspot.com',
    messagingSenderId: '853168427037',
    appId: '1:853168427037:web:d9e0146fdb81816bb2f6f4',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
