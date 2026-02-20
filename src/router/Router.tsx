import { Routes, Route } from 'react-router-dom';
import { Home } from '@/src/pages/Home';
import { Sobre } from '@/src/pages/Sobre';
import { Contacto } from '@/src/pages/Contacto';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
};
