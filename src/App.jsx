import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="pt-32 bg-[#0B0E13] text-[#e2e4e9]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App
