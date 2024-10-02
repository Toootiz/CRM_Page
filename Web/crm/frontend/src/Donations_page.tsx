import { useState } from 'react';
import {  useNotify, SelectInput } from 'react-admin';
import { TextField, Button  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Css/Donation_Page.css'; 
import React from "react";




const DonationsPage = () => {

    const handleDonation = () => {
        const notify = useNotify();
        const navigate = useNavigate();
        console.log('Donation');
        // Lógica para enviar la donación al servidor
        // Aquí se puede realizar una petición POST a la API para guardar la donación en la base de datos
        // Se puede utilizar fetch, axios u otra librería para realizar la petición
        // Una vez que la petición se complete, se puede mostrar una notificación al usuario
        notify('Donación realizada con éxito');
        navigate('/'); // Redirigir al usuario a la página principal después de realizar la donación
    };

    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [donationAmount, setDonationAmount] = useState(''); 
    const [donationType, setDonationType] = useState('');


    return (
        <div id="donations-body">
            <div className="Donation_box">
                <h2>Donación</h2>
                <div className="inputBx" id="Name-field">
                    <TextField
                        label="Nombre"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        fullWidth
                        InputProps={{
                            disableUnderline: true,
                            style: { color: 'white' },
                        }}
                        InputLabelProps={{
                            style: { color: 'rgba(255, 255, 255, 0.75)', width: '100%', paddingLeft: '25px', paddingTop: '14px'},
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
                            disableUnderline: true,
                            style: { color: 'white' },
                        }}
                        InputLabelProps={{
                            style: { color: 'rgba(255, 255, 255, 0.75)', width: '100%', paddingLeft: '25px', paddingTop: '14px'},
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
                            disableUnderline: true,
                            style: { color: 'white' },
                        }}
                        InputLabelProps={{
                            style: { color: 'rgba(255, 255, 255, 0.75)', width: '100%', paddingLeft: '25px', paddingTop: '14px'},
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
                            disableUnderline: true,
                            style: { color: 'white' },
                        }}
                        InputLabelProps={{
                            style: { color: 'rgba(255, 255, 255, 0.75)', width: '100%', paddingLeft: '25px', paddingTop: '14px'},
                        }}
                    />
                </div>
                <div className="inputBx" id="TYpe-field">
                    <SelectInput
                        label="Tipo de donación"
                        choices={[
                            { id: 'T', name: 'Tarjeta' },
                            { id: 'E', name: 'Efectivo' },
                            { id: 'Es', name: 'Especie' },]}
                        value={donationType}
                        onChange={(e) => setDonationType(e.target.value)}
                        fullWidth
                        InputProps={{
                            disableUnderline: true,
                            style: { color: 'white' },
                        }}
                        InputLabelProps={{
                            style: { color: 'rgba(255, 255, 255, 0.75)', width: '100%', paddingLeft: '25px', paddingTop: '14px'},
                        }}
                    />
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