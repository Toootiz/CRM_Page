import React from 'react';
import '@testing-library/jest-dom';
import { UserCreate } from '../src/users.tsx';
import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Create, SimpleForm, TextInput, required, regex } from 'react-admin';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const queryClient = new QueryClient();
const theme = createTheme();



describe('Debe acepatar un mail valido', () =>{
    it('Aceptar mail valido', () => {
    render(
        <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <SimpleForm>
                        <TextInput 
                            source="Email"
                            placeholder="Email"
                            validate={[required(), regex(/.+@.+\..+/, 'El email debe contener un "@" y un dominio válido.')]}
                        />
                    </SimpleForm>
                </ThemeProvider>
            </QueryClientProvider>);

    // Encontrar el campo de email
    const emailField = screen.getByPlaceholderText("Email");

    // Simular la entrada de un email válido
    fireEvent.change(emailField, { target: { value: 'test@example.com' } });
    fireEvent.blur(emailField); // Disparar el evento blur para validar el campo

    // Verificar que el mensaje de error no se muestre
    expect(screen.queryByText('El email debe contener un "@" y un dominio válido.')).not.toBeInTheDocument();
});
});