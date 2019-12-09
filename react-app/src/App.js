import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import logo from './logo.svg';
import './App.css';

import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <Router />
    </div>
    </BrowserRouter>
  );
}

export default App;
