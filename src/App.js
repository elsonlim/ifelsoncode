import React, { Component } from 'react';
import './App.css';
import Blog from './Components/Blog';

class App extends Component {
  render() {
    return (
      <div data-testid={"App"} className="App">
        <Blog />
      </div>
    );
  }
}

export default App;
