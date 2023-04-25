import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  return (
    <Router>
    <div className="lg:pt-32 pt-24 bg-[#0B0E13] text-[#e2e4e9]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App
