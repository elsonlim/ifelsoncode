import React, { Component } from 'react';
import '../styles/App.css';
import Blog from '../components/Blog';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import { initializeApp } from 'firebase/app';

class App extends Component {
  componentWillMount() {
    initializeApp({
      apiKey: "AIzaSyA2Gk0VffTp7Y4SpjhtEON-MdFV2vyhd14",
      authDomain: "ifelsoncode.firebaseapp.com",
      databaseURL: "https://ifelsoncode.firebaseio.com",
      projectId: "ifelsoncode",
      storageBucket: "ifelsoncode.appspot.com",
      messagingSenderId: "1003148850780"
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
