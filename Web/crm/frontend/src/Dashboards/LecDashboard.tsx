import { List, Datagrid, TextField, EmailField, NumberField, DateField, ListProps } from 'react-admin';
import React from 'react';

const LecDashboard: React.FC<ListProps> = (props) => {
    // Puedes verificar el correo electrónico si es necesario
    console.log('Props en LecDashboard:', props);

    return (
        <List
            {...props}
            resource="misdonaciones"  // Usar el nuevo recurso "misdonaciones"
            actions={false}  // Eliminar barra de herramientas superior para lectores
            pagination={false}  // Si no necesitas paginación para lectores
            perPage={25}  // Puedes ajustar la cantidad de registros a mostrar si es necesario
        >
            <Datagrid rowClick="show">
                <TextField source="name" label="Nombre" />
                <EmailField source="email" label="Email" />
                <TextField source="phone" label="Teléfono" />
                <NumberField source="amount" label="Monto" />
                <DateField source="date" label="Fecha" />
                <TextField source="type" label="Tipo" />
            </Datagrid>
        </List>
    );
};

export default LecDashboard;
