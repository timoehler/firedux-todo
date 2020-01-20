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

    if (user) {
      return <div className="App">
        <List/>
        <button onClick={signOut}>Sign out</button>

      </div>
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            user
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }

          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
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