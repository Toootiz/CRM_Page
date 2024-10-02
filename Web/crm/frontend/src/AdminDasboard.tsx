import { List, Datagrid, TextField, TopToolbar, CreateButton, EmailField, NumberField, DateField } from 'react-admin';
import { EditButton, DeleteButton } from 'react-admin';

// Componente para mostrar las acciones de administrador (botón de crear)
const AdminActions = () => (
    <TopToolbar>
        <CreateButton /> {/* Mostrar botón de creación sólo para 'administrador' */}
    </TopToolbar>
);

const AdminDashboard = () => {
    return (
        <List
            resource="donations"
            actions={<AdminActions />} // Mostrar acciones de administrador
        >
            <Datagrid>
                <TextField source = "name" label= "Nombre"/>
                <EmailField source = "email" label= "Email"/>
                <TextField source = "phone" label="Teléfono"/>
                <NumberField source = "amount" label= "Monto"/>
                <DateField source = "date" label = "Fecha"/>
                <TextField source = "type" label = "Tipo"/>
                <EditButton /> {/* Mostrar botón de editar para 'administrador' */}
                <DeleteButton /> {/* Mostrar botón de eliminar para 'administrador' */}
            </Datagrid>
        </List>
    );
};

export default AdminDashboard;