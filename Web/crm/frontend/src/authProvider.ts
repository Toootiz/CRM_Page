import { API_URL } from './config';

// Archivo auxiliar en el proceso de login y gestión de permisos

interface LoginParams {
    username: string;
    password: string;
}

interface AuthResponse {
    token: string;
    role: string;
}

const authProvider = {
    login: ({ username, password }: LoginParams): Promise<AuthResponse> => { // Comunicación con el backend en el proceso de login
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', `${API_URL}/users/login`, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        const json: AuthResponse = JSON.parse(xhr.responseText); // Parsear la respuesta JSON
                        console.log('Response received:', json);
                        localStorage.setItem('auth', JSON.stringify({ ...json })); // Guardar el token en localStorage
                        //localStorage.setItem('auth',  json );
                        resolve(json); // Resolver la promesa con la respuesta JSON
                    } else {
                        console.error('Login failed:', xhr.status, xhr.statusText);
                        reject(new Error('Network error')); // Rechazar la promesa si falla
                    }
                }
            };

            const requestBody = JSON.stringify({ username, password });
            console.log('Request Body:', requestBody); 
            xhr.send(requestBody); // Enviar el cuerpo de la solicitud como JSON
        });
    },
    logout: (): Promise<void> => { // Elimina el token de autenticación al cerrar sesión
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkAuth: (): Promise<void> => { // Obtiene el token de local storage
        return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
    },
    checkError: ({ status }: { status: number }): Promise<void> => { // Elimina el token de localstorage si algo falla
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getPermissions: (): Promise<string> => { // obtiene el rol de localstorage
        const auth = JSON.parse(localStorage.getItem('auth') || '{}') as AuthResponse;
        return auth ? Promise.resolve(auth.role) : Promise.reject();
    },
};

export default authProvider;