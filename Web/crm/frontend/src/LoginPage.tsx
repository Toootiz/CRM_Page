//Este archivo gestiona el proceso de login y la redirección inicial

import { useState } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState(''); // Estado para almacenar el nombre de usuario
    const [password, setPassword] = useState(''); // Estado para almacenar la contraseña
    const login = useLogin(); // Hook de react-admin para gestionar el login
    const notify = useNotify(); // Hook de react-admin para mostrar notificaciones
    const navigate = useNavigate(); // Hook para navegar entre rutas

    const handleLogin = () => {
        login({ username, password })
            .then(() => {
                const authString = localStorage.getItem('auth');
                const auth = authString ? JSON.parse(authString) : null; // Obtener la información de autenticación del localStorage
                if (auth) {
                    const userRole = auth.role; // Obtener el rol del usuario

                    // Redirigir basado en el rol usando navigate
                    // if (userRole === 'administrador') {
                    //     navigate('/admin-dashboard'); // Redirigir a AdminDashboard si es administrador
                    // } else if (userRole === 'lector') {
                    //     navigate('/reader-dashboard'); // Redirigir a ReaderDashboard si es lector
                    // } else {
                        navigate('/'); // Redirigir a una página predeterminada si el rol no es reconocido
                    //}
                } else {
                    notify('Error al obtener la información de usuario', { type: 'warning' });
                }
            })
            .catch(() => {
                notify('Credenciales inválidas', { type: 'warning' }); // Mostrar notificación de error si las credenciales no son válidas
            });
    };

    return (
        <div>
            <h2>Login</h2>
            <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Actualizar el estado del nombre de usuario
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Actualizar el estado de la contraseña
            />
            <Button onClick={handleLogin}>Login</Button> {/* Botón para iniciar sesión */}
        </div>
    );
};

export default LoginPage;