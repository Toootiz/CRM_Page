import { AuthProvider } from 'react-admin';
import { fetchUtils } from 'react-admin';

const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    const request = new Request('http://localhost:3000/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetchUtils.fetchJson(request).then(({ json }) => {
      localStorage.setItem('token', json.token);
    });
  },
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};

export default authProvider;