import React, { Component } from 'react';
import '../styles/App.css';
import Blog from '../components/Blog';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

class App extends Component {
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