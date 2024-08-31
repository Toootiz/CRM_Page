import {useMediaQuery, Theme} from '@mui/material';
import {List, SimpleList, Datagrid, TextField, EmailField, Edit, SimpleForm, TextInput, Create, required, ReferenceField, ReferenceInput} from 'react-admin';

const commentFilters = [
    <TextInput source = "q" label = "Search" alwaysOn />,
    <ReferenceInput source = "postId" label = "Post" reference = "posts" />,
];

export const CommentList = () => (
    <List filters = {commentFilters}>
        <Datagrid>
            <ReferenceField source = "postId" reference = "posts"/>
            <TextField source = "id"/>
            <TextField source = "name"/>
            <TextField source = "email"/>
            <TextField source = "body"/>
        </Datagrid>
    </List>
);

export const CommentEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source = "postId" reference = "posts"/>
            <TextInput disabled source = "id" InputProps = {{disabled: true}}/>
            <TextInput source = "name"/>
            <TextInput source = "email" InputProps = {{disabled: true}}/>
            <TextInput source = "body"/>
        </SimpleForm>
    </Edit>
);

export const CommentCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source = "postId" reference = "posts"/>
            <TextInput source = "name"/>
            <TextInput source = "email"/>
            <TextInput source = "body"/>
        </SimpleForm>
    </Create>
);