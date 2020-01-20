import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseApp from './firebaseConfig';
import logo from './logo.svg';
import List from './components/List'
import './App.css';


class App extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    console.log("user", user)

    if (user) {
      return <div className="App">
        <h1>Hello, {user.displayName}</h1>
        <List/>
        <button onClick={signOut}>Sign out</button>
      </div>
    }
    return (
      <div className="App">
        <header className="App-header">

               <p>Please sign in.</p>
              <button onClick={signInWithGoogle}>Sign in with Google</button>
        
        </header>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);