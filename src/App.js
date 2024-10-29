// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS here

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for HomePage with Header and Sidebar */}
          <Route path="/" element={<HomePage />} />
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
