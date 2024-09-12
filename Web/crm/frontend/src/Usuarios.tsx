import {List, Datagrid, TextField, EmailField, SimpleForm,
     TextInput, Create, required,regex, useUnique,useEditController, Edit,
      EditButton, Title} from 'react-admin';


const userFilters = [
    <TextInput source = "q" label = "Search" alwaysOn />,
];


export const UserList= () => (
    <List filters = {userFilters}>
        <Datagrid>
            <TextField source = "id"/>
            <TextField source = "nombre"/>
            <EmailField source = "email"/>
            <TextField source = "telefono"/>
            <EditButton/>
        </Datagrid>
        
    </List>
);

export const UserEdit = () => {
    const unique = useUnique();
    const {save, isPending} = useEditController();
    if (isPending) return null;
    return(
        <div>
            <Edit>
                <Title title= " - Editando Usuario"/>
                <SimpleForm onSubmit={save}>
                    <TextInput disabled source = "id" InputProps = {{disabled: true}}/>
                    <TextInput source = "nombre"/>
                    <TextInput source = "email"
                    validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.'),unique()]}/>
                    <TextInput source = "telefono"/>
                </SimpleForm>
            </Edit>
        </div>
        
    );
};

export const UserCreate = () => {
    const unique = useUnique();
    return (
    
    <Create>
        <SimpleForm>
            <TextInput source = "nombre"/>
            <TextInput source = "email" 
            validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.'),unique()]}/>
            <TextInput source = "telefono" validate={unique()}/>
        </SimpleForm>
    </Create>
)};