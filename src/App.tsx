import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contacto from './pages/Contacto';
import Privacidade from './pages/Privacidade';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/privacidade" element={<Privacidade />} />
      </Routes>
      <CookieBanner /> 
    </Router>
  );
}

export default App;
