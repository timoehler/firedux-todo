import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyBV97ki72Q-9cqkpVBG026b-E2UC5YeiL0",
  authDomain: "firedux-todo-3dba3.firebaseapp.com",
  databaseURL: "https://firedux-todo-3dba3.firebaseio.com",
  projectId: "firedux-todo-3dba3",
  storageBucket: "firedux-todo-3dba3.appspot.com",
  messagingSenderId: "1049415002530"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
