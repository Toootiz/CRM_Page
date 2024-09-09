import {useMediaQuery, Theme} from '@mui/material';
import {List, SimpleList, Datagrid, TextField, EmailField, Edit, SimpleForm, TextInput, Create, required,regex, useUnique,useEditController, Title} from 'react-admin';

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

export const UserEdit = () => {
    const {save, isPending} = useEditController();
    if (isPending) return null;
    return(
        <div>
            <Title title= "Editar Usuario"/>
                <SimpleForm onSubmit={save}>
                    <TextInput disabled source = "id" InputProps = {{disabled: true}}/>
                    <TextInput source = "name"/>
                    <TextInput source = "username"/>
                    <TextInput source = "email"/>
                    <TextInput source = "address.city"/>
                    <TextInput source = "phone"/>
                    <TextInput source = "website"/>
                    <TextInput source = "company.name"/>
                </SimpleForm>
        </div>
        
    );
};

export const UserCreate = () => {
    const unique = useUnique();
    return (
    
    <Create>
        <SimpleForm>
            <TextInput source = "id" validate = {[required()]}/>
            <TextInput source = "name"/>
            <TextInput source = "username" validate={unique()}/>
            <TextInput source = "email" 
            validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.'),unique()]}/>
            <TextInput source = "address.city"/>
            <TextInput source = "phone" validate={unique()}/>
            <TextInput source = "website"/>
            <TextInput source = "company.name"/>
        </SimpleForm>
    </Create>
)};