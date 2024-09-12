import {List, SimpleList, Datagrid, TextField, EmailField, SimpleForm,
    TextInput, Create, required,regex, useUnique,useEditController, Edit,
     EditButton, defaultTheme, useTheme, Button, Title, NumberField, NumberInput} from 'react-admin';


const userFilters = [
   <TextInput source = "q" label = "Search" alwaysOn />,
];


export const DonationList= () => (
   <List filters = {userFilters}>
       <Datagrid>
           <TextField source = "id"/>
           <TextField source = "name"/>
           <EmailField source = "email"/>
           <TextField source = "phone"/>
           <NumberField source = "Monto"/>
           <TextField source = "Tipo"/>
           <EditButton/>
       </Datagrid>
       
   </List>
);

export const DonationEdit = () => {
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
                   <NumberInput source = "Monto"/>
                   <TextInput source = "Tipo"/>
               </SimpleForm>
           </Edit>
       </div>
       
   );
};

export const DonationCreate = () => {
   const unique = useUnique();
   return (
   
   <Create>
       <SimpleForm>
           <TextInput source = "id" validate = {[required()]}/>
           <TextInput source = "name"/>
           <TextInput source = "email" 
           validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.'),unique()]}/>
           <TextInput source = "phone" validate={unique()}/>
           <NumberInput source = "Monto"/>
           <TextInput source = "Tipo"/>
       </SimpleForm>
   </Create>
)};