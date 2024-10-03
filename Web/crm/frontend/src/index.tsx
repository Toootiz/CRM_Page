import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { App } from "./App";
import HomePage from "./Páginas/PaginaInicial";  // Página inicial
import DonaPage from "./Páginas/PaginaDonaciones";  // Página pública de donaciones 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Redirige a /inicio si la ruta es la raíz */}
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/donaciones" element={<DonaPage />} />
        {/* Incluye el resto de la app */}
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
