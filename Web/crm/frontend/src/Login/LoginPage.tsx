import { useState } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { TextField, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../Css/LoginPage.css'; 

const LoginPage = () => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const login = useLogin(); 
    const notify = useNotify(); 
    const navigate = useNavigate(); 

    const handleLogin = () => {
        login({ username, password })
            .then(() => {
                
                const authString = localStorage.getItem('auth');
                const auth = authString ? JSON.parse(authString) : null; 
                if (auth) {
                    const userRole = auth.role; 
                    const userEmail = auth.email; 
                    const userPhone = auth.phone; 
                    const userName = auth.name;
                    localStorage.setItem('userEmail', userEmail); 
                    localStorage.setItem('userPhone', userPhone); 
                    localStorage.setItem('userName', userName);
                    setIsLoggedIn(true); 
                    if (userRole === 'Lector') {
                        navigate('/lec-dashboard'); 
                    } else if (userRole === 'Administrador') {
                        navigate('/admin-dashboard'); 
                    } else {
                        navigate('/'); 
                    }
                    window.location.reload();
                } else {
                    notify('Error al obtener la información de usuario', { type: 'warning' });
                }
            })
            .catch(() => {
                notify('Credenciales inválidas', { type: 'warning' }); 
            });
    };

    const handleKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            handleLogin(); 
        }
    };


    const handleGoBack = () => {
        navigate('/');
    }


    if (isLoggedIn) {
        return <div className="login-cleanup" >Iniciando sesión...</div>; 
    }

    return (
        <div id="login-body">
            <IconButton
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    color: 'white',
                }}
                onClick={handleGoBack} 
            >
                <ArrowBackIcon/>
            </IconButton> 
                       
            <div className="ring">
                <i style={{ '--clr': '#755185' }}></i>
                <i style={{ '--clr': '#daa370' }}></i>
                <i style={{ '--clr': '#a23b62' }}></i>
                <div className="login">
                    <h2 style={{ fontSize: '43px'}}>Inicio de sesión</h2>
                    <div className="inputBx">
                        <TextField
                            label="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} 
                            fullWidth
                            InputProps={{
                                disableUnderline: true,
                                style: { color: 'white' },
                            }}
                            InputLabelProps={{
                                style: { color: 'rgba(255, 255, 255, 0.75)', width: '100%', paddingLeft: '30px', paddingTop: '22px'}, 
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
                            onKeyPress={handleKeyPress}
                            fullWidth
                            InputProps={{
                                disableUnderline: true,
                                style: { color: 'white' }, 
                            }}
                            InputLabelProps={{
                                style: { color: 'rgba(255, 255, 255, 0.75)', width: '100%', paddingLeft: '30px', paddingTop: '22px'},
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
                                marginTop: '25px'
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
