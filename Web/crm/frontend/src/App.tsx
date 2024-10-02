
import { Admin, Resource, defaultDarkTheme, defaultLightTheme } from "react-admin";
import './Css/Main.css';  // Este es el CSS general para toda la app
import { Admin, Resource, radiantLightTheme, radiantDarkTheme } from "react-admin";
import { Layout } from "./Layout";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";
import { DonationList } from "./Donaciones";
import { DonationEdit } from "./Donaciones";
import { DonationCreate } from "./Donaciones";
import { UserList } from "./Usuarios";
import { UserEdit } from "./Usuarios";
import { UserCreate } from "./Usuarios";
import { i18nProvider } from "./i18nProvider";
import LoginPage from "./LoginPage";
import MyBarChart from "./Barras";
import MyPieChart from "./pie_chart";
import MyDashboard from "./DashBoard";
import { deepmerge } from "@mui/utils" 

const lightTheme = defaultLightTheme;
const darkTheme = deepmerge(defaultDarkTheme, {palette: {mode: 'dark'}});


export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} authProvider={authProvider} 
  i18nProvider={i18nProvider} loginPage={LoginPage} dashboard={MyDashboard} 
  theme={lightTheme} darkTheme={darkTheme}>
    
    <Resource name = "donations" options={{ label: 'Donaciones' }} list = { DonationList } edit = { DonationEdit } create = { DonationCreate }/>
    <Resource name = "users" options={{ label: 'Usuarios' }}list = { UserList } edit = { UserEdit } create = { UserCreate }/>
    <Resource name = "barchart" options={{ label: 'Gráfico de Barras' }} list = { MyBarChart }/>
    
import UserIcon from "@mui/icons-material/Group";
import PostIcon from "@mui/icons-material/Book";

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
    <Resource name="donations" options={{ label: 'Donaciones' }} list={DonationList} edit={DonationEdit} create={DonationCreate} icon={PostIcon} />
    <Resource name="users" options={{ label: 'Usuarios' }} list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
  </Admin>
);
