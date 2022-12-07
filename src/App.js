import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Packages from './pages/Packages';
import Deliveries from './pages/Deliveries';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Packages />} />
          <Route path='/deliveries' element={<Deliveries />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;