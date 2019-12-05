import React, { Component } from 'react';
import Landing from "./components/Landing";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Hogwarts, young witches and wizards!</h1>
        </header>
        <Landing />
      </div>
    );
  }
}

export default App;
