import React, { Component } from 'react';
import '../styles/App.css';
import Blog from '../components/Blog';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import * as firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyA2Gk0VffTp7Y4SpjhtEON-MdFV2vyhd14",
  authDomain: "ifelsoncode.firebaseapp.com",
  databaseURL: "https://ifelsoncode.firebaseio.com",
  projectId: "ifelsoncode",
  storageBucket: "ifelsoncode.appspot.com",
  messagingSenderId: "1003148850780"
});

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;

        console.log(displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData);
        // ...
      } else {
        console.log('User is signed out.')
        // User is signed out.
        // ...
      }
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div data-testid={"App"} className="App">
          <Blog />
        </div>
      </Provider>
    );
  }
}

export default App;
