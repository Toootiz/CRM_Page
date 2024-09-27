import {List, Datagrid, TextField, EmailField, SimpleForm,
     TextInput, Create, required,regex,useEditController, Edit,
      EditButton, Title} from 'react-admin';


const userFilters = [
    <TextInput source = "q" label = "Busqueda" alwaysOn />,
];


export const UserList= () => (
    <List filters = {userFilters}>
        <Datagrid>
            <TextField source = "name" label="Nombre"/>
            <TextField source = "username" label="Nombre de Usuario"/>
            <TextField source = "role" label="Rol"/>
            <EmailField source = "email" label="Email"/>
            <TextField source = "phone" label="Teléfono"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const UserEdit = () => {
    const {save, isPending} = useEditController();
    if (isPending) return null;
    return(
        <div>
            <Edit>
                <Title title= " - Editando Usuario"/>
                <SimpleForm onSubmit={save}>
                    <TextInput disabled source = "id" InputProps = {{disabled: true}} label= "ID"/>
                    <TextInput source = "username" label= "Nombre de Usuario"/>
                    <TextInput source = "role" label="Rol"/>
                    <TextInput source = "name" label="Nombre"/>
                    <TextInput source = "email" label="Email"
                    validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.')]}/>
                    <TextInput source = "phone" label="Teléfono"/>
                </SimpleForm>
            </Edit>
        </div>
        
    );
};

export const UserCreate = () => {
    return (
    
    <Create>
        <SimpleForm>
            <TextInput source = "username" label= "Nombre de Usuario"/>
            <TextInput source = "password" label="Contraseña"/>
            <TextInput source = "role" label="Rol"/>
            <TextInput source = "name"label="Nombre"/>
            <TextInput source = "email" label="Email"
            validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.')]}/>
            <TextInput source = "phone" label="Teléfono"/>
        </SimpleForm>
    </Create>
)};