import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDOTY61seGg4V0FtRdQyE5GeUhw77xTO3w",
  authDomain: "my-postie.firebaseapp.com",
  databaseURL: "https://my-postie.firebaseio.com",
  projectId: "my-postie",
  storageBucket: "my-postie.appspot.com",
  messagingSenderId: "381571444271"
})

const base = Rebase.createClass(firebaseApp.database())

export default base