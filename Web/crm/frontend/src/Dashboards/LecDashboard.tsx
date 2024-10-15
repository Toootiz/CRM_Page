import { useState } from 'react';
import { List, Datagrid, TextField, EmailField, NumberField, DateField, ListProps } from 'react-admin';
import { TextField as MuiTextField, Fab, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Css/lecCss.css';  // Asegúrate de tener un archivo CSS para los estilos personalizados

const LecDashboard: React.FC<ListProps> = (props) => {
    
    // Estado para controlar si se muestra el formulario de donación o el dashboard
    const [showDonationForm, setShowDonationForm] = useState(false);

    const authString = localStorage.getItem('auth');
    const auth = authString ? JSON.parse(authString) : null;
    const userEmail = auth ? auth.email : null;  // El correo del usuario
    const userPhone = auth ? auth.phone : null;  // El teléfono del usuario
    const userName = auth ? auth.name : null;

    // Imprimir los datos del usuario en la consola
    console.log('Correo del usuario:', userEmail);
    console.log('Teléfono del usuario:', userPhone);
    console.log('Nombre del usuario:', userName);

    // Estado para los campos del formulario de donación
    const [donationAmount, setDonationAmount] = useState('');

    // Función para manejar la visualización del formulario de donación
    const handleShowDonationForm = () => {
        setShowDonationForm(true);
    };

    // Volver al dashboard
    const handleBackToDashboard = () => {
        setShowDonationForm(false);
    };

    // Manejar la donación
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
                handleBackToDashboard(); // Volver al dashboard
            }, 1000);
        } catch (error) {
            console.error('Error en la donación', error);
            toast.error('Error al realizar la donación', { position: "top-center", hideProgressBar: true, autoClose: 3000 });
        }
    };

    return (
        <div>
            {!showDonationForm ? (
                // Mostrar el Dashboard si no se está mostrando el formulario de donación
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

                    {/* Botón para abrir el formulario de donación */}
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
                // Mostrar el formulario de donación si está activo
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

                    {/* Mostrar el nombre del usuario */}
                    <div className="inputBx" id="Name-field">
                        <Typography variant="h6">Nombre: {userName}</Typography>
                    </div>

                    {/* Mostrar el correo del usuario */}
                    <div className="inputBx" id="Email-field">
                        <Typography variant="h6">Email: {userEmail}</Typography>
                    </div>

                    {/* Mostrar el teléfono del usuario */}
                    <div className="inputBx" id="Phone-field">
                        <Typography variant="h6">Teléfono: {userPhone}</Typography>
                    </div>

                    {/* Input para la cantidad a donar */}
                    <div className="inputBx" id="Amount-field">
                        <MuiTextField
                            label="Cantidad a donar"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(e.target.value)}
                            fullWidth
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
