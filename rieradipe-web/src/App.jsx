import "./global.css";

import { Routes, Route } from "react-router-dom";

import Main from "./components/main/Main.jsx";
import Ciber from "./components/ciber/Ciber.jsx";
import CodigoMundosComp from "./components/codigoMundos/CodigoMundosComp.jsx";
import Servicios from "./components/servicios/Servicios.jsx";
import OptimizacionWeb from "./components/optimizacion/OptimizacionWeb.jsx";
import Contacto from "./components/contacto/Contacto.jsx";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import AdminPanel from "./components/admin/AdminPanel";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "minimal");
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ciber" element={<Ciber />} />
          <Route path="/codigomundo" element={<CodigoMundosComp />} />
          <Route path="/optimizacion" element={<OptimizacionWeb />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/panel-secreto-7f4d2a1b" element={<AdminPanel />} />
          <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
