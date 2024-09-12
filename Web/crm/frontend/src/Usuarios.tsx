import {List, SimpleList, Datagrid, TextField, EmailField, SimpleForm,
     TextInput, Create, required,regex, useUnique,useEditController, Edit,
      EditButton, defaultTheme, useTheme, Button, Title} from 'react-admin';


const userFilters = [
    <TextInput source = "q" label = "Search" alwaysOn />,
];


export const UserList= () => (
    <List filters = {userFilters}>
        <Datagrid>
            <TextField source = "id"/>
            <TextField source = "name"/>
            <EmailField source = "email"/>
            <TextField source = "phone"/>
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
                <Title title= " - Editando Usuario..."/>
                <SimpleForm onSubmit={save}>
                    <TextInput disabled source = "id" InputProps = {{disabled: true}}/>
                    <TextInput source = "name"/>
                    <TextInput source = "email"
                    validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.'),unique()]}/>
                    <TextInput source = "phone"/>
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
            <TextInput source = "id" validate = {[required()]}/>
            <TextInput source = "name"/>
            <TextInput source = "email" 
            validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.'),unique()]}/>
            <TextInput source = "phone" validate={unique()}/>
        </SimpleForm>
    </Create>
)};