import { useState } from 'react';
import { List, Datagrid, TextField, EmailField, NumberField, DateField, ListProps } from 'react-admin';
import { TextField as MuiTextField, Fab, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Css/lecCss.css';  

const LecDashboard: React.FC<ListProps> = (props) => {
    
    const [showDonationForm, setShowDonationForm] = useState(false);

    const authString = localStorage.getItem('auth');
    const auth = authString ? JSON.parse(authString) : null;
    const userEmail = auth ? auth.email : null; 
    const userPhone = auth ? auth.phone : null;  
    const userName = auth ? auth.name : null;


    console.log('Correo del usuario:', userEmail);
    console.log('Teléfono del usuario:', userPhone);
    console.log('Nombre del usuario:', userName);

    const [donationAmount, setDonationAmount] = useState('');

    const handleShowDonationForm = () => {
        setShowDonationForm(true);
    };


    const handleBackToDashboard = () => {
        setShowDonationForm(false);
    };


    const handleDonation = async () => {
        if (!userName || !userEmail || !donationAmount) {
            toast.error('Por favor completa todos los campos', { position: "top-center" });
            return;
        }

        try {
            await axios.post('https://localhost:5001/api/donations/create', {
                name: userName,
                email: userEmail,
                phone: userPhone,
                amount: donationAmount
            });
            toast.success('Donación realizada con éxito.', { position: "top-center", autoClose: 3000 });
            setTimeout(() => {
                handleBackToDashboard();
            }, 1000);
        } catch (error) {
            console.error('Error en la donación', error);
            toast.error('Error al realizar la donación', { position: "top-center", hideProgressBar: true, autoClose: 3000 });
        }
    };

    const handleKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            handleDonation(); 
        }
    };

    return (
        <div>
            {!showDonationForm ? (
                <>
                    <List
                        {...props}
                        resource="misdonaciones"
                        actions={false}
                        pagination={false}
                        perPage={20}
                    >
                        <Datagrid rowClick="show" bulkActionButtons={false}>
                            <TextField source="name" label="Nombre" />
                            <EmailField source="email" label="Email" />
                            <TextField source="phone" label="Teléfono" />
                            <NumberField source="amount" label="Monto" />
                            <DateField source="date" label="Fecha" />
                            <TextField source="type" label="Tipo" />
                        </Datagrid>
                    </List>

                    <Fab
                        color="primary"
                        aria-label="donar"
                        onClick={handleShowDonationForm}
                        style={{ borderRadius: '12px', width: '100px', height: '50px' }} // Cambia el estilo aquí
                        className="fab"
                    >
                        Donar
                    </Fab>
                </>
            ) : (
                <div className="Donation_box">
                    <IconButton
                        style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            color: 'white'
                        }}
                        onClick={handleBackToDashboard}
                    >
                        <ArrowBackIcon />
                    </IconButton>

                    <h2></h2>
                    <Typography variant="h4">¡Gracias por tu donación!</Typography>

    
                    <div className="inputBx" id="Name-field">
                        <Typography variant="h6">Nombre: {userName}</Typography>
                    </div>

                    <div className="inputBx" id="Email-field">
                        <Typography variant="h6">Email: {userEmail}</Typography>
                    </div>

                    <div className="inputBx" id="Phone-field">
                        <Typography variant="h6">Teléfono: {userPhone}</Typography>
                    </div>

                    <div className="inputBx" id="Amount-field">
                        <MuiTextField
                            label="Cantidad a donar"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(e.target.value)}
                            onKeyPress={handleKeyPress}
                            fullWidth
                            InputProps={{
                                disableUnderline: true,
                                style: { color: 'white' },
                            }}
                            InputLabelProps={{
                                style: {
                                    color: 'rgba(255, 255, 255, 0.75)',
                                    width: '100%',
                                    paddingLeft: '30px',
                                    paddingTop: '22px',
                                },
                                sx: {
                                    '&.MuiInputLabel-shrink': {
                                        transform: 'translate(0, -15px) scale(0.80)',
                                    },
                                },
                            }}
                            variant="standard"
                        />
                    </div>

                    <div className="inputBx">
                        <Button
                            onClick={handleDonation}
                            fullWidth
                            variant="contained"
                        >
                            Donar
                        </Button>
                    </div>

                    <ToastContainer />
                </div>
            )}
        </div>
    );
};

export default LecDashboard;
