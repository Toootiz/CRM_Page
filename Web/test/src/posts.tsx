import {useMediaQuery, Theme} from '@mui/material';
import {List, SimpleList, Datagrid, TextField, 
EmailField, ReferenceField, EditButton, ReferenceInput, 
SimpleForm, TextInput, Edit, Create, useResetStore, Button, Toolbar, SaveButton} from 'react-admin';
import { useFormContext } from 'react-hook-form';



const postFilters = [
    <TextInput source = "q" label="Search" alwaysOn />,
    <ReferenceInput source = "userId" label = "User" reference = "users" />,
];

const ClearValuesButton = () => {
    const form = useFormContext(); 
    const handleClear = () => {
        form.reset(); 
    };
    return <Button label="Limpiar valores" onClick={handleClear} />;
};


export const PostList= () => (
    <>
    
    <List filters={postFilters}>
    
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List></>
);

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source = "id" InputProps = {{disabled: true}}/>
            <ReferenceInput source = "userId" reference = "users" InputProps = {{disabled: true}}/>
            <TextInput source = "title"/>
            <TextInput multiline source = "body"/>
        </SimpleForm>
    </Edit>
);

export const CreatePost: React.FC = (props) => (
        <Create {...props}>

            <SimpleForm toolbar={<CustomToolbar />}>
                <ReferenceInput source = "userId" reference = "users"/>
                <TextInput source = "title"/>
                <TextInput source = "body" multiline rows = {5} />
                
            </SimpleForm>
        </Create>
);

const CustomToolbar = (props: any) => (
    <Toolbar {...props}>
        <SaveButton />
        <ClearValuesButton /> {ClearValuesButton}
    </Toolbar>
);



 