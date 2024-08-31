import {useMediaQuery, Theme} from '@mui/material';
import {List, SimpleList, Datagrid, TextField, EmailField, Edit, SimpleForm, TextInput, Create, required, ReferenceField, ReferenceInput} from 'react-admin';

const albumFilters = [
    <TextInput source = "q" label = "Search" alwaysOn />,
    <ReferenceInput source = "userId" label = "User" reference = "users" />,
];
export const AlbumsList = () => (
    <List filters = {albumFilters}>
        <Datagrid>
            <ReferenceField source = "userId" reference = "users"/>
            <TextField source = "id"/>
            <TextField source = "title"/>
        </Datagrid>
    </List>
);

export const AlbumsEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source = "userId" reference = "users" InputProps = {{disabled: true}}/>
            <TextInput disabled source = "id" InputProps = {{disabled: true}}/>
            <TextInput source = "title"/>
        </SimpleForm>
    </Edit>
);

export const AlbumsCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source = "userId" reference = "users"/>
            <TextInput source = "title"/>
        </SimpleForm>
    </Create>
);