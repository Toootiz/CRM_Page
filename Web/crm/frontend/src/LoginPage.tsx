import { useState } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Css/LoginPage.css'; // Importar los estilos personalizados

const LoginPage = () => {
    const [username, setUsername] = useState(''); // Estado para almacenar el nombre de usuario
    const [password, setPassword] = useState(''); // Estado para almacenar la contraseña
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para rastrear si el usuario ha iniciado sesión
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
                    setIsLoggedIn(true); // Actualizar el estado de inicio de sesión
                    setTimeout(() => {
                        navigate('/'); // Redirigir basado en el rol usando navigate después de 1 segundo para simular carga
                    }, 1000); // Simular el tiempo de carga antes de redirigir
                } else {
                    notify('Error al obtener la información de usuario', { type: 'warning' });
                }
            })
            .catch(() => {
                notify('Credenciales inválidas', { type: 'warning' }); // Mostrar notificación de error si las credenciales no son válidas
            });
    };

    // Si el usuario ha iniciado sesión, no mostrar los elementos de la página de login
    if (isLoggedIn) {
        return <div className="login-cleanup">Iniciando sesión...</div>; // Limpiar la pantalla o mostrar mensaje temporal
    }

    return (
        <div id="login-body"> 
            <div className="ring">
                <i style={{ '--clr': '#00ff0a' }}></i>
                <i style={{ '--clr': '#ff0057' }}></i>
                <i style={{ '--clr': '#fffd44' }}></i>
                <div className="login">
                    <h2>Inicio de sesión</h2>
                    <div className="inputBx">
                        <TextField
                            label="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} // Actualizar el estado del nombre de usuario
                            fullWidth
                            InputProps={{
                                disableUnderline: true,
                                style: { color: 'white' },
                            }}
                            InputLabelProps={{
                                style: { color: 'rgba(255, 255, 255, 0.75)', width: '100%', paddingLeft: '25px', paddingTop: '14px'}, 
                                sx: {
                                    '&.MuiInputLabel-shrink': { 
                                        transform: 'translate(0, -15px) scale(0.80)' 
                                    }
                                },
                            }}
                            variant="standard"
                        />
                    </div>
                    <div className="inputBx">
                        <TextField
                            label="Contraseña"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            fullWidth
                            InputProps={{
                                disableUnderline: true,
                                style: { color: 'white' }, 
                            }}
                            InputLabelProps={{
                                style: { color: 'rgba(255, 255, 255, 0.75)', width: '100%', paddingLeft: '25px', paddingTop: '14px'},
                                sx: {
                                    '&.MuiInputLabel-shrink': { 
                                        transform: 'translate(0, -15px) scale(0.80)' 
                                },
                                }
                            }}
                            variant="standard"
                        />
                    </div>
                    <div className="inputBx">
                        <Button
                            onClick={handleLogin}
                            fullWidth
                            variant="contained"
                            style={{
                                background: 'linear-gradient(45deg, #ff357a, #fff172)',
                                color: '#fff',
                                borderRadius: '40px',
                            }}
                        >
                            Iniciar sesión
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;