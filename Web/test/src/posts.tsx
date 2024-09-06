import {useMediaQuery, Theme} from '@mui/material';
import {List, SimpleList, Datagrid, TextField, EmailField, ReferenceField, EditButton, ReferenceInput, SimpleForm, TextInput, Edit, Create} from 'react-admin';


const postFilters = [
    <TextInput source = "q" label="Search" alwaysOn />,
    <ReferenceInput source = "userId" label = "User" reference = "users" />,
];

export const PostList= () => (
    <List filters = {postFilters}>
        <Datagrid>
            <TextField source = "id"/>
            <ReferenceField source = "userId" reference = "users"/>
            <TextField source = "title"/>
            <TextField source = "body"/>
            <EditButton/>
        </Datagrid>
    </List>
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

export const CreatePost = () => (
        <Create>
            <SimpleForm>
                <ReferenceInput source = "userId" reference = "users"/>
                <TextInput source = "title"/>
                <TextInput source = "body" multiline rows = {5}/>
            </SimpleForm>
        </Create>
);