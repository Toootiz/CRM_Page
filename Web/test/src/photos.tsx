import {useMediaQuery, Theme} from '@mui/material';
import {List, SimpleList, Datagrid, TextField, EmailField, Edit, SimpleForm, TextInput, Create, required, ReferenceField, ReferenceInput, ImageField} from 'react-admin';

const photoFilters = [
    <TextInput source = "q" label = "Search" alwaysOn />,
    <ReferenceInput source = "albumId" label = "Album" reference = "albums" />,
];

export const  PhotosList = () => (
    <List filters = {photoFilters}>
        <Datagrid>
            <ReferenceField source = "albumId" reference = "albums"/>
            <TextField source = "id"/>
            <TextField source = "title"/>
            <ImageField source = "url"/>
            <ImageField source = "thumbnailUrl"/>
        </Datagrid>
    </List>
);

export const PhotosEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source = "albumId" reference = "albums"/>
            <TextInput disabled source = "id" InputProps = {{disabled: true}}/>
            <TextInput source = "title"/>
            <TextInput source = "url"/>
            <TextInput source = "thumbnailUrl"/>
        </SimpleForm>
    </Edit>
);

export const PhotosCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source = "albumId" reference = "albums"/>
            <TextInput source = "title"/>
            <TextInput source = "url"/>
            <TextInput source = "thumbnailUrl"/>
        </SimpleForm>
    </Create>
);