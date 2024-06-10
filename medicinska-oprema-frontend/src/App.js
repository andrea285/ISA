
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from "./components/Register";
import Login from "./components/Login";
import Companies from "./components/Companies";

import logo from './logo.svg';
import './App.css';

function App() {
  return (

      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            <h1>Welcome to Medicinska Oprema App</h1>
            <p>Your React application is running!</p>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/companies" element={<Companies />} />
            </Routes>
          </header>

        </div>
      </Router>

  );
}

export default App;
