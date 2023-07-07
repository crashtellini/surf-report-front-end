import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalculatedRisk from './components/SurfConditions/CalculatedRisk.js';
import GetSurfConditions from './components/SurfConditions/GetSurfConditions.js';

//test

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<GetSurfConditions />} />
          <Route path="/calculatedrisk" element={<CalculatedRisk />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
