import { fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { API_URL } from './config';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const auth = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', `Bearer ${auth.token}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider(API_URL, httpClient);

export default dataProvider;