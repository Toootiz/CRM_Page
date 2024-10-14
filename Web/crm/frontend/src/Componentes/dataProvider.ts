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

const jsonProvider = jsonServerProvider(API_URL, httpClient);

const dataProvider: DataProvider = {
    ...jsonProvider,
    getList: (resource, params) => {
        const auth = JSON.parse(localStorage.getItem('auth') || 'null');
        if (resource === 'misdonaciones' && auth && auth.email) {
            // Si es un lector, ajustar la URL para buscar por email del usuario
            const email = auth.email;
            return jsonProvider.getList(`donations/email/${email}`, params);
        }
        return jsonProvider.getList(resource, params);  // Para otros casos como administradores
    },
};



export default dataProvider;
