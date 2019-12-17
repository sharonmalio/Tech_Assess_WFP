import React from 'react';
import { Link } from 'react-router-dom';

import logo from './images.jpeg';
import './App.css';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="tag">Welcome to WHO-WFP Life Expectancy data</p>
        <Link to="/life-expectancy"> Life Expectancy data </Link>
      </header>
    </div>
  );
}

export default App;
