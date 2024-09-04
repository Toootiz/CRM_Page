import {useMediaQuery, Theme} from '@mui/material';
import {List, SimpleList, Datagrid, TextField, EmailField, Edit, SimpleForm, TextInput, Create, required,regex} from 'react-admin';

const userFilters = [
    <TextInput source = "q" label = "Search" alwaysOn />,
];

export const UserList= () => (
    <List filters = {userFilters}>
        <Datagrid>
            <TextField source = "id"/>
            <TextField source = "name"/>
            <TextField source = "username"/>
            <EmailField source = "email"/>
            <TextField source = "address.city"/>
            <TextField source = "phone"/>
            <TextField source = "website"/>
            <TextField source = "company.name"/>
        </Datagrid>
    </List>
);

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source = "id" InputProps = {{disabled: true}}/>
            <TextInput source = "name"/>
            <TextInput source = "username"/>
            <TextInput source = "email"/>
            <TextInput source = "address.city"/>
            <TextInput source = "phone"/>
            <TextInput source = "website"/>
            <TextInput source = "company.name"/>
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source = "id" validate = {[required()]}/>
            <TextInput source = "name"/>
            <TextInput source = "username"/>
            <TextInput source = "email" 
            validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.')]}/>
            <TextInput source = "address.city"/>
            <TextInput source = "phone"/>
            <TextInput source = "website"/>
            <TextInput source = "company.name"/>
        </SimpleForm>
    </Create>
);