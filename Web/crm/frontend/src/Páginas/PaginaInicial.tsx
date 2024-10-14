import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Style_main_page.css';

const PaginaInicial: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Encabezado principal */}
      <header id="main-header">
        <img src="https://sanders.com.mx/wp-content/uploads/2022/12/logo.png.webp" alt="Sanders Logo" id="logo" />
      </header>

      {/* Navegación */}
      <nav id="main-nav">
        <a href="/donaciones">Donaciones</a>
        <a href="/login">Iniciar Sesión</a>
        <a href='/registro'>Registro</a>
      </nav>

      {/* Contenedor de las secciones usando Flexbox */}
      <div className="section-container">
        {/* Sección de Visión */}
        <section 
          id="vision-section" 
          onClick={() => navigate('/vision')}
          className="flex-section"
        >
          <img src="https://sanders.com.mx/wp-content/uploads/2023/01/noticias.png.webp" alt="Imagen Visión" className="section-img" />
          <div className="section-text">
            <h2>Visión</h2>
            <p>Esta es la sección de visión. Aquí puedes añadir la visión de tu organización.</p>
          </div>
        </section>

        {/* Sección de Misión */}
        <section 
          id="mision-section" 
          onClick={() => navigate('/mision')}
          className="flex-section"
        >
          <div className="section-text">
            <h2>Misión</h2>
            <p>Esta es la sección de misión. Aquí puedes añadir la misión de tu organización.</p>
          </div>
          <img src="https://sanders.com.mx/wp-content/uploads/2023/01/eventos.png.webp" alt="Imagen Misión" className="section-img" />
        </section>
      </div>

      {/* Pie de página */}
      <footer id="main-footer">
        <p>&copy; 2024 Mi Organización. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default PaginaInicial;
