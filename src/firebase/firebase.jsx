import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyByAJYXbD16gHWtd7UiWHDHK82xyaQ94Fw',
  authDomain: 'react-slack-clone-b655c.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-b655c.firebaseio.com',
  projectId: 'react-slack-clone-b655c',
  storageBucket: 'react-slack-clone-b655c.appspot.com',
  messagingSenderId: '549600197909',
  appId: '1:549600197909:web:4f847233f1dd173dd83d1c',
  measurementId: 'G-10FZT09V34',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
