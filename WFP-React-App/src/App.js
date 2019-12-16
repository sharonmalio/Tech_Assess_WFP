import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="tag">Welcome to WHO to WFP Life Expectancy data</p>
        <Link to="/life-expectancy"> Life Expectancy data </Link>
      </header>
    </div>
  );
}

export default App;
