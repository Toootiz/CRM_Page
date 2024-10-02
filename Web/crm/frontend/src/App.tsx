import './Css/Main.css';  // Este es el CSS general para toda la app
import { Admin, Resource, radiantLightTheme, radiantDarkTheme, CustomRoutes } from "react-admin";
import { Layout } from "./Layout";
import { Route } from "react-router-dom";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";
import { DonationList, DonationEdit, DonationCreate } from "./Recursos/Donaciones";
import { UserList, UserEdit, UserCreate } from "./Recursos/Usuarios";
import { i18nProvider } from "./i18nProvider";
import LoginPage from "./Login/LoginPage";
import UserIcon from "@mui/icons-material/Group";
import PostIcon from "@mui/icons-material/Book";
import  AdminDashboard  from "./Dashboards/AdminDasboard";
import LecDashboard from "./Dashboards/LecDashboard";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    i18nProvider={i18nProvider}
    loginPage={LoginPage}
    theme={radiantLightTheme}
    darkTheme={radiantDarkTheme}
  >
    <CustomRoutes>
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/lec-dashboard" element={<LecDashboard />} />
    </CustomRoutes>

    <Resource name="donations" options={{ label: 'Donaciones' }} list={DonationList} edit={DonationEdit} create={DonationCreate} icon={PostIcon} />
    <Resource name="users" options={{ label: 'Usuarios' }} list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
  </Admin>
);
