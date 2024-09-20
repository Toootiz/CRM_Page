import jsonServerProvider from "ra-data-json-server";
import { API_URL } from './config';

 const dataProvider = jsonServerProvider(API_URL);

 export default dataProvider;