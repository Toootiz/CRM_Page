import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { App } from "./App";
import HomePage from "./Páginas/PaginaInicial";  
import DonaPage from "./Páginas/PaginaDonaciones"; 
import RegisterPage from "./Páginas/RegistroUsuario";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/donaciones" element={<DonaPage />} />
        <Route path='/registro' element={<RegisterPage/>} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
