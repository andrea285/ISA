
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from "./components/Register";
import Login from "./components/Login";
import Companies from "./components/Companies";

import './App.css';
import './components/styles.css';

function App() {
  return (

      <Router>
        <div className="App">
          <nav className="App-nav">
            <a className="App-link" href="/register">Register</a>
            <a className="App-link" href="/login">Login</a>
            <a className="App-link" href="/companies">Companies</a>

            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/companies" element={<Companies />} />
            </Routes>
          </nav>

        </div>
      </Router>

  );
}

export default App;
