//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import GetSurfConditions from './components/SurfConditions/GetSurfConditions.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">Sands Beach</h1>
        <GetSurfConditions/>
      </div>
    );
  }
}

export default App;
