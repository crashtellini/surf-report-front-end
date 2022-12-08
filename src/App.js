import React, { Component } from 'react';
import GetSurfConditions from './components/SurfConditions/GetSurfConditions.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="header">Sands Beach</h1>
        </header>
        <GetSurfConditions/>
      </div>
    );
  }
}

export default App;





