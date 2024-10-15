import './Css/Main.css';
import { Admin, Resource, CustomRoutes } from "react-admin";
import { Layout } from "./Layout";
import { Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles'; // Proveedor de temas de Material-UI
import theme from './Temas/theme';
import darkTheme from './Temas/darkTheme';
import dataProvider from "./Componentes/dataProvider";
import authProvider from "./Componentes/authProvider";
import { DonationList, DonationEdit, DonationCreate } from "./Recursos/Donaciones";
import { UserList, UserEdit, UserCreate } from "./Recursos/Usuarios";
import { i18nProvider } from "./Componentes/i18nProvider";
import LoginPage from "./Login/LoginPage";
import HomePage from "./Páginas/PaginaInicial"; 
import DonaPage from "./Páginas/PaginaDonaciones"; 
import UserIcon from "@mui/icons-material/Group";
import PostIcon from "@mui/icons-material/Book";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MyDashboard from "./Dashboards/DashBoard";
import LecDashboard from "./Dashboards/LecDashboard";

export const App = () => {
  // Obtener el rol del usuario desde localStorage
  const authString = localStorage.getItem('auth');
  const auth = authString ? JSON.parse(authString) : null;
  const userRole = auth ? auth.role : null;  // 'Administrador' o 'Lector'
  
  
  return (
    <>
    <ThemeProvider theme={theme}>
        {/* Define rutas customizadas antes de la autenticación */}
        <CustomRoutes noLayout>
          <Route path="/inicio" element={<HomePage />} /> 
          <Route path="/donaciones" element={<DonaPage />} />
        </CustomRoutes>

        {/* Rutas protegidas, requieren autenticación */}
        <Admin
          layout={Layout}
          dataProvider={dataProvider}
          authProvider={authProvider}
          i18nProvider={i18nProvider}
          loginPage={LoginPage}
          theme={theme}
          darkTheme={darkTheme}
        >
          {/* Rutas condicionales según el rol del usuario */}
          <CustomRoutes>
            {userRole === 'Administrador' && (
              <Route path="/admin-dashboard" element={<MyDashboard />} />
            )}
            {userRole === 'Lector' && (
              <Route path="/lec-dashboard" element={<LecDashboard />} />
            )}
          </CustomRoutes>

          {/* Recursos para administradores */}
          {userRole === 'Administrador' && (
            <>
              <Resource
                name="admin-dashboard"
                options={{ label: 'Dashboard' }}
                list={MyDashboard}
                icon={DashboardIcon}
              />
              <Resource
                name="donations"
                options={{ label: 'Donaciones' }}
                list={DonationList}
                edit={DonationEdit}
                create={DonationCreate}
                icon={PostIcon}
              />
              <Resource
                name="users"
                options={{ label: 'Usuarios' }}
                list={UserList}
                edit={UserEdit}
                create={UserCreate}
                icon={UserIcon}
              />
            </>
          )}

          {userRole === 'Lector' && (
            <>
              <Resource
                name="misdonaciones"  // Recurso filtrado para los lectores
                options={{ label: 'Mis Donaciones' }}
                list={LecDashboard}   // Componente que muestra la lista de donaciones filtradas
                icon={PostIcon}
              />
            </>
          )}





        </Admin>
    </ThemeProvider>
    </>
  );
};
