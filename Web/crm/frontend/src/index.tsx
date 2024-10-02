import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { App } from "./App";
import HomePage from "./PaginaInicial";  // Página inicial
import DonaPage from "./PaginaDonaciones";  // Página pública de donaciones
import LoginPage from "./Login/LoginPage";  // Página de login

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Redirige a /inicio si la ruta es la raíz */}
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/donaciones" element={<DonaPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Incluye el resto de la app */}
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
