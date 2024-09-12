import {List, Datagrid, TextField, EmailField, SimpleForm,
    TextInput, Create, required,regex, useUnique,useEditController, Edit,
     EditButton, Title, NumberField, NumberInput} from 'react-admin';


const userFilters = [
   <TextInput source = "q" label = "Search" alwaysOn />,
];


export const DonationList= () => (
   <List filters = {userFilters}>
       <Datagrid>
           <TextField source = "id"/>
           <TextField source = "nombre"/>
           <EmailField source = "email"/>
           <TextField source = "telefono"/>
           <NumberField source = "monto"/>
           <TextField source = "tipo"/>
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
               <Title title= " - Editando Usuario"/>
               <SimpleForm onSubmit={save}>
                   <TextInput disabled source = "id" InputProps = {{disabled: true}}/>
                   <TextInput source = "nombre"/>
                   <TextInput source = "email"
                   validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.'),unique({resource:"email"})]}/>
                   <TextInput source = "telefono"/>
                   <NumberInput source = "monto"/>
                   <TextInput source = "tipo"/>
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
           <TextInput source = "nombre"/>
           <TextInput source = "email" validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.'),unique({resource:"email"})]}/>
           <TextInput source = "telefono" validate={unique()}/>
           <NumberInput source = "monto"/>
           <TextInput source = "tipo"/>
       </SimpleForm>
   </Create>
)};