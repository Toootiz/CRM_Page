// src/themes/darkTheme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';

const darkTheme: ThemeOptions = createTheme({
    palette: {
        mode: 'dark', // Activación del modo oscuro
        primary: {
            main: '#B57EDC', // Morado pastel claro
            contrastText: '#121212', // Texto oscuro para contraste
        },
        secondary: {
            main: '#8A2BE2', // Violeta brillante para acentos
            contrastText: '#FFFFFF', // Texto blanco
        },
        background: {
            default: '#121212', // Fondo oscuro predeterminado
            paper: '#1E1E1E', // Fondo más claro para tarjetas y paneles
        },
        text: {
            primary: '#E0E0E0', // Texto claro para buena legibilidad
            secondary: '#A89CB0', // Texto secundario con tono gris-morado
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 16,
        h1: {
            fontSize: '2.2rem',
            fontWeight: 700,
            color: '#E0E0E0', // Títulos en color claro
        },
        h2: {
            fontSize: '1.8rem',
            fontWeight: 600,
            color: '#E0E0E0',
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
            color: '#E0E0E0', // Texto principal claro
        },
        button: {
            fontSize: '1rem',
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '24px',
                    textTransform: 'none',
                    padding: '10px 24px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
                    '&:hover': {
                        backgroundColor: '#9D4FBF', // Violeta más oscuro al pasar el ratón
                    },
                    '&:focus': {
                        outline: '2px solid #8A2BE2',
                        outlineOffset: '2px',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    padding: '20px',
                    borderRadius: '16px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', // Sombra suave en modo oscuro
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1E1E1E', // Fondo de la barra en gris oscuro
                    color: '#FFFFFF', // Texto blanco
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#8A2BE2', // Violeta brillante para enlaces
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                    '&:focus': {
                        outline: '2px solid #8A2BE2',
                        outlineOffset: '2px',
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderColor: '#B57EDC', // Borde morado claro
                    fontSize: '1rem',
                    padding: '10px',
                    '&:focus': {
                        outline: '2px solid #B57EDC',
                    },
                },
            },
        },
    },
    spacing: 8, // Espaciado consistente
});

export default darkTheme;
