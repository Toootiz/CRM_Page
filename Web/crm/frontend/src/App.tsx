import './Css/Main.css';  // Este es el CSS general para toda la app
import { Admin, Resource, radiantLightTheme, radiantDarkTheme, CustomRoutes } from "react-admin";
import { Layout } from "./Layout";
import { Route } from "react-router-dom";
import dataProvider from "./Componentes/dataProvider";
import authProvider from "./Componentes/authProvider";
import { DonationList, DonationEdit, DonationCreate } from "./Recursos/Donaciones";
import { UserList, UserEdit, UserCreate } from "./Recursos/Usuarios";
import { i18nProvider } from "./Componentes/i18nProvider";
import LoginPage from "./Login/LoginPage";
import MyBarChart from "./Gráficas/Barras";
//import MyPieChart from "./pie_chart";
import MyDashboard from "./DashBoards/DashBoard";
import UserIcon from "@mui/icons-material/Group";
import PostIcon from "@mui/icons-material/Book";
import LecDashboard from "./Dashboards/LecDashboard";



export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    i18nProvider={i18nProvider}
    loginPage={LoginPage}
    dashboard={MyDashboard}
    theme={radiantLightTheme}
    darkTheme={radiantDarkTheme}
  >
    <CustomRoutes>
      <Route path="/admin-dashboard" element={<MyDashboard />} />
      <Route path="/lec-dashboard" element={<LecDashboard />} />
    </CustomRoutes>

    <Resource name="donations" options={{ label: 'Donaciones' }} list={DonationList} edit={DonationEdit} create={DonationCreate} icon={PostIcon} />
    <Resource name="users" options={{ label: 'Usuarios' }} list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    {/* <Resource name = "barchart" options={{ label: 'Gráfico de Barras' }} list = { MyBarChart }/> */}
  </Admin>
  )