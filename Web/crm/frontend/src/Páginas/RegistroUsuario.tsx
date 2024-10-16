import { useState } from 'react';
import { TextField, Button, IconButton, Select, MenuItem, InputLabel, FormControl  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify'
import '../Css/RegisterPage.css';
import 'react-toastify/dist/ReactToastify.css';


const UserRegister = () => {

    const navigate = useNavigate();

    const handleRegister = async () =>{
        try{
            const response = await axios.post('https://localhost:5001/api/users/register',{
                username: username,
                password: password,
                name: name,
                email: email,
                phone: phone,
            });
            console.log(response);
            toast.success('¡Usuario registrado con éxito! Regresando a la página de inicio de sesión...',{ position: "top-center" ,  autoClose: 3000});

            setTimeout(() => {
                navigate('/login');
            }, 1000);

        }catch(error){
            console.error('Error en el registro',error);
            toast.error('Error al registrar usuario',{position: 'top-center', hideProgressBar: true, autoClose: 3000});
        }
    };

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(''); 
    const [phone, setPhone] = useState('');

    const handleGoBack = () => {
        navigate('/');
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
                       
                <div className="register">
                    <h2 style={{ fontSize: '33px'}}>Registro de Usuario</h2>
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
                    <div className='inputBx'>
                        <TextField
                            label="Nombre completo"
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
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
                    <div className='inputBx'>
                        <TextField
                            label="Correo"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
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
                    <div className='inputBx'>
                        <TextField
                            label="Teléfono"
                            value={phone}
                            onChange={(e)=> setPhone(e.target.value)}
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
                            onClick={handleRegister}
                            fullWidth
                            variant="contained"
                            style={{
                                background: 'linear-gradient(45deg, #ff357a, #fff172)',
                                color: '#fff',
                                borderRadius: '40px',
                                padding: '10px',
                                marginTop: '15px'
                            }}
                        >
                            Registrarse
                        </Button>
                    </div>
                </div>
                <ToastContainer/>
            </div>
    );
};

export default UserRegister;