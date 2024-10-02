import {List, Datagrid, TextField, EmailField, SimpleForm,
    TextInput, Create, required,regex,useEditController, Edit,
     EditButton, Title, NumberField, NumberInput,
     DateField, DateInput, DeleteButton} from 'react-admin';


const userFilters = [
   <TextInput source = "q" label = "Busqueda" alwaysOn />,
];


export const DonationList= () => (
   <List filters = {userFilters}>
       <Datagrid>
           <TextField source = "name" label= "Nombre"/>
           <EmailField source = "email" label= "Email"/>
           <TextField source = "phone" label="Teléfono"/>
           <NumberField source = "amount" label= "Monto"/>
           <DateField source = "date" label = "Fecha"/>
           <TextField source = "type" label = "Tipo"/>
           <EditButton/>
           <DeleteButton/>
       </Datagrid>
       
   </List>
);

export const DonationEdit = () => {
   const {save, isPending} = useEditController();
   if (isPending) return null;
   return(
       <div>
           <Edit>
               <Title title= " - Editando Usuario"/>
               <SimpleForm onSubmit={save}>
                   <TextInput disabled source = "id" label= "ID" InputProps = {{disabled: true}}/>
                   <TextInput source = "name" label= "Nombre"/>
                   <TextInput source = "email"label = "Email"
                   validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.')]}/>
                   <TextInput source = "phone" label="Teléfono"/>
                   <NumberInput source = "amount" label ="Monto"/>
                   <DateInput source = "date" label = "Fecha"/>
                   <TextInput source = "type" label="Tipo"/> 
               </SimpleForm>
           </Edit>
       </div>
       
   );
};

export const DonationCreate = () => {
   return (
   
   <Create>
       <SimpleForm>
           <TextInput source = "name" label = "Nombre"/>
           <TextInput source = "email" label = "Email"
           validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.')]}/>
           <TextInput source = "phone" label = "Teléfono"/>
           <NumberInput source = "amount" label = "Monto"/>
           <TextInput source = "type" label = "Tipo"/>
       </SimpleForm>
   </Create>
)};