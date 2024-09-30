import './Css/Main.css';  // Este es el CSS general para toda la app
import { Admin, Resource } from "react-admin";
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

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    i18nProvider={i18nProvider}
    loginPage={LoginPage}
  >
    <Resource name="donations" options={{ label: 'Donaciones' }} list={DonationList} edit={DonationEdit} create={DonationCreate} />
    <Resource name="users" options={{ label: 'Usuarios' }} list={UserList} edit={UserEdit} create={UserCreate} />
  </Admin>
);
