import { useState } from 'react';
import {  useNotify } from 'react-admin';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, IconButton  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../Css/Donation_Page.css'; 

const DonationsPage = () => {
    const navigate = useNavigate();

    const handleDonation = () => {
        const notify = useNotify();
        console.log('Donation');
        notify('Donación realizada con éxito');
        //navigate('/'); // Redirigir al usuario a la página principal después de realizar la donación
    };

    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [donationAmount, setDonationAmount] = useState(''); 
    const [donationType, setDonationType] = useState('');

    const handleGoBack = () => {
        navigate('/');
    }

    return (
        <div id="donations-body">
            <div className="Donation_box">
                <IconButton
                    style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        color: 'white',
                    }}
                    onClick={handleGoBack} // Cambiado de onAbort a onClick para manejar la navegación
                >
                    <ArrowBackIcon/>
                </IconButton>

                <h2>Donación</h2>
                <div className="inputBx" id="Name-field">
                    <TextField
                        label="Nombre"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        fullWidth
                        InputProps={{
                            
                            style: { color: 'white' },
                        }}
                        InputLabelProps={{
                            style: { color: 'rgba(255, 255, 255, 0.75)', width: '100%', paddingLeft: '25px'}, 
                            sx: {
                                '&.MuiInputLabel-shrink': { 
                                    transform: 'translate(0, -20px) scale(0.80)' 
                                }
                            },
                        }}
                    />
                </div>

                <div className="inputBx" id="Email-field">
                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        InputProps={{
                            
                            style: { color: 'white' },
                        }}
                        InputLabelProps={{
                            style: { color: 'rgba(255, 255, 255, 0.75)', width: '100%', paddingLeft: '25px'}, 
                            sx: {
                                '&.MuiInputLabel-shrink': { 
                                    transform: 'translate(0, -20px) scale(0.80)' 
                                }
                            },
                        }}
                    />
                </div>

                <div className="inputBx" id="Phone-field">
                    <TextField
                        label="Telefono"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        fullWidth
                        InputProps={{
                            
                            style: { color: 'white' },
                        }}
                        InputLabelProps={{
                            style: { color: 'rgba(255, 255, 255, 0.75)', width: '100%', paddingLeft: '25px'}, 
                            sx: {
                                '&.MuiInputLabel-shrink': { 
                                    transform: 'translate(0, -20px) scale(0.80)' 
                                }
                            },
                        }}
                    />
                </div>
                
                <div className="inputBx" id="Amount-field">
                    <TextField
                        label="Cantidad a donar"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        fullWidth
                        InputProps={{
                            style: { color: 'white' },
                        }}
                        InputLabelProps={{
                                style: { color: 'rgba(255, 255, 255, 0.75)', width: '100%', paddingLeft: '25px'}, 
                                sx: {
                                    '&.MuiInputLabel-shrink': { 
                                        transform: 'translate(0, -20px) scale(0.80)' 
                                    }
                                },
                            }}
                    />
                </div>

                <div className="inputBx" id="Type-field">
                <FormControl fullWidth >
                    <InputLabel style={{ color: 'rgba(255, 255, 255, 0.75)', paddingLeft: '25px'  }}>
                        Tipo de donación
                        
                    </InputLabel>
                    <Select
                        value={donationType}
                        onChange={(e) => setDonationType(e.target.value)}
                        style={{ color: 'white', height: '51.6px'}} 
                         // Estilo del select
                    >
                        
                        <MenuItem value="T">Tarjeta</MenuItem>
                        <MenuItem value="E">Efectivo</MenuItem>
                        <MenuItem value="Es">Especie</MenuItem>

                    </Select>
                </FormControl>
                </div>

                <div className="inputBx">
                        <Button
                            onClick={handleDonation}
                            fullWidth
                            variant="contained"
                            style={{
                                background: 'linear-gradient(45deg, #ff357a, #fff172)',
                                color: '#fff',
                                borderRadius: '40px',
                            }}
                        >
                            Donar
                        </Button>
                    </div>
            </div>

        </div>
    );


};

export default DonationsPage;