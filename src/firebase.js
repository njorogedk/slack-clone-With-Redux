import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDKjhp0tdS6zNQWpOaLDQnhGm5OaLAwwk0",
    authDomain: "slack-clone-b2ca7.firebaseapp.com",
    projectId: "slack-clone-b2ca7",
    storageBucket: "slack-clone-b2ca7.appspot.com",
    messagingSenderId: "701240719608",
    appId: "1:701240719608:web:ed1d627f119753dc6f230d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };