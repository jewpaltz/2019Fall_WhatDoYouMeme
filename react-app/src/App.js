import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import './App.css';

import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Nav />
        <Router />
    </div>
    </BrowserRouter>
  );
}

export default App;
