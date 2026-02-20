import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Contacto from "../pages/Contacto";
import Biblia from "../pages/Biblia";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/biblia" element={<Biblia />} />
      </Routes>
    </BrowserRouter>
  );
};
