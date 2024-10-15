// src/themes/theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';

const theme: ThemeOptions = createTheme({
    palette: {
        primary: {
            main: '#6A0DAD', // Morado profundo
            contrastText: '#FFFFFF', // Texto blanco para contraste
        },
        secondary: {
            main: '#B57EDC', // Morado pastel claro
            contrastText: '#2E1336', // Texto oscuro para contraste
        },
        background: {
            default: '#F3E8FF', // Fondo lavanda pálido
            paper: '#FFFFFF', // Fondo blanco para paneles y tarjetas
        },
        text: {
            primary: '#2E1336', // Texto principal en morado oscuro
            secondary: '#6A0DAD', // Texto secundario en morado profundo
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 16,
        h1: {
            fontSize: '2.2rem',
            fontWeight: 700,
            color: '#2E1336', // Títulos en morado oscuro
        },
        h2: {
            fontSize: '1.8rem',
            fontWeight: 600,
            color: '#2E1336',
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
            color: '#2E1336',
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
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                        backgroundColor: '#4C0A8A', // Morado más oscuro al pasar el ratón
                    },
                    '&:focus': {
                        outline: '2px solid #B57EDC',
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
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#6A0DAD',
                    color: '#FFFFFF',
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#B57EDC',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                    '&:focus': {
                        outline: '2px solid #B57EDC',
                        outlineOffset: '2px',
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderColor: '#6A0DAD',
                    fontSize: '1rem',
                    padding: '10px',
                    '&:focus': {
                        outline: '2px solid #6A0DAD',
                    },
                },
            },
        },
    },
    spacing: 8,
});

export default theme;
