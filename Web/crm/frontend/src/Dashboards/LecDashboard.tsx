import { List, Datagrid, TextField, EmailField, NumberField, DateField } from 'react-admin';

const LecDashboard = () => (
    <List
        resource="donations"
        actions={false} // Eliminar barra de herramientas superior para lectores
    >
        <Datagrid rowClick="show"> {/* Restringir acción de click en la fila */}
            <TextField source = "name" label= "Nombre"/>
            <EmailField source = "email" label= "Email"/>
            <TextField source = "phone" label="Teléfono"/>
            <NumberField source = "amount" label= "Monto"/>
            <DateField source = "date" label = "Fecha"/>
            <TextField source = "type" label = "Tipo"/>
        </Datagrid>
    </List>
);

export default LecDashboard;