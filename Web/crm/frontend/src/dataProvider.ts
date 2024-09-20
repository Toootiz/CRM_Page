import { fetchUtils, DataProvider } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { API_URL } from './config';

interface Auth {
    token: string;
}

const httpClient = (url: string, options: fetchUtils.Options = {}): Promise<any> => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    if (options.headers instanceof Headers) {
        const auth: Auth | null = JSON.parse(localStorage.getItem('auth') || 'null');
        if (auth && auth.token) {
            options.headers.set('Authorization', `Bearer ${auth.token}`);
        }
    }
    return fetchUtils.fetchJson(url, options);
};

const dataProvider: DataProvider = jsonServerProvider(API_URL, httpClient);

export default dataProvider;
