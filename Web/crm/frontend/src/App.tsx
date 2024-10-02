import './Css/Main.css';
import { Admin, Resource, radiantLightTheme, radiantDarkTheme, CustomRoutes } from "react-admin";
import { Layout } from "./Layout";
import { Route } from "react-router-dom";
import dataProvider from "./Componentes/dataProvider";
import authProvider from "./Componentes/authProvider";
import { DonationList, DonationEdit, DonationCreate } from "./Recursos/Donaciones";
import { UserList, UserEdit, UserCreate } from "./Recursos/Usuarios";
import { i18nProvider } from "./Componentes/i18nProvider";
import LoginPage from "./Login/LoginPage";
import HomePage from "./PaginaInicial"; 
import DonaPage from "./PaginaDonaciones"; 
import UserIcon from "@mui/icons-material/Group";
import PostIcon from "@mui/icons-material/Book"
//import MyPieChart from "./pie_chart";
import MyDashboard from "./DashBoards/DashBoard";
import LecDashboard from "./Dashboards/LecDashboard";



export const App = () => (
  <>
    {/* Define rutas customizadas antes de la autenticación */}
    <CustomRoutes noLayout>
      <Route path="/inicio" element={<HomePage />} /> 
      <Route path="/donaciones" element={<DonaPage />} />
      <Route path="/login" element={<LoginPage />} />     
    </CustomRoutes>

    {/* Rutas protegidas, requieren autenticación */}
    <Admin
      layout={Layout}
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      loginPage={LoginPage}
      dashboard={MyDashboard}
      theme={radiantLightTheme}
      darkTheme={radiantDarkTheme}
      // requireAuth ya no es necesario para HomePage y login
    >
      <CustomRoutes>
        <Route path="/admin-dashboard" element={<MyDashboard />} />
        <Route path="/lec-dashboard" element={<LecDashboard />} />
      </CustomRoutes>

      <Resource name="donations" options={{ label: 'Donaciones' }} list={DonationList} edit={DonationEdit} create={DonationCreate} icon={PostIcon} />
      <Resource name="users" options={{ label: 'Usuarios' }} list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />

    </Admin>
  </>
);
