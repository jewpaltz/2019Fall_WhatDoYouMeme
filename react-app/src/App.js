import React from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from "./components/Nav";

function App() {
  return (
    <div className="container">
      <Nav />
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
