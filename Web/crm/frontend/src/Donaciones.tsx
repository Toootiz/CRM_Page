import {List, Datagrid, TextField, EmailField, SimpleForm,
    TextInput, Create, required,regex, useUnique,useEditController, Edit,
     EditButton, Title, NumberField, NumberInput} from 'react-admin';


const userFilters = [
   <TextInput source = "q" label = "Busqueda" alwaysOn />,
];


export const DonationList= () => (
   <List filters = {userFilters}>
       <Datagrid>
           <TextField source = "id" label = "ID"/>
           <TextField source = "nombre" label= "Nombre"/>
           <EmailField source = "email" label= "Email"/>
           <TextField source = "telefono" label = "Telefono"/>
           <NumberField source = "monto" label= "Monto"/>
           <TextField source = "tipo" label = "Tipo"/>
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
                   <TextInput disabled source = "id" label= "ID" InputProps = {{disabled: true}}/>
                   <TextInput source = "nombre" label= "Nombre"/>
                   <TextInput source = "email"label = "Email"
                   validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.'),unique({resource:"email"})]}/>
                   <TextInput source = "telefono" label="Telefono"/>
                   <NumberInput source = "monto" label ="Monto"/>
                   <TextInput source = "tipo" label="Tipo"/> 
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