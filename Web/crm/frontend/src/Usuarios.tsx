import {List, Datagrid, TextField, EmailField, SimpleForm,
     TextInput, Create, required,regex,useEditController, Edit,
      EditButton, Title} from 'react-admin';


const userFilters = [
    <TextInput source = "q" label = "Busqueda" alwaysOn />,
];


export const UserList= () => (
    <List filters = {userFilters}>
        <Datagrid>
            <TextField source = "id" label= "ID"/>
            <TextField source = "nombre" label="Nombre"/>
            <EmailField source = "email" label="Email"/>
            <TextField source = "telefono" label="Telefono"/>
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
                    <TextInput source = "nombre" label="Nombre"/>
                    <TextInput source = "email" label="Email"
                    validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.')]}/>
                    <TextInput source = "telefono" label="Telefono"/>
                </SimpleForm>
            </Edit>
        </div>
        
    );
};

export const UserCreate = () => {
    return (
    
    <Create>
        <SimpleForm>
            <TextInput source = "usuario" label= "Nombre de usuario"/>
            <TextInput source = "contraseña" label="Contraseña"/>
            <TextInput source = "rol" label="Rol"/>
            <TextInput source = "nombre"label="Nombre"/>
            <TextInput source = "email" label="Email"
            validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.')]}/>
            <TextInput source = "telefono" label="Telefono"/>
        </SimpleForm>
    </Create>
)};