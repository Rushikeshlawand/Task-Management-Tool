import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {}
          <Route path="/" element={<HomePage />} />
          {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
