import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { CreatePost } from '../src/posts'; 

jest.mock('react-admin', () => ({
    Create: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    SimpleForm: ({ children }: { children: React.ReactNode }) => <form>{children}</form>,
    ReferenceInput: ({ source }: { source: string }) => <input placeholder={`ReferenceInput for ${source}`} />,
    TextInput: ({ source, multiline }: { source: string; multiline?: boolean }) => (
        <input placeholder={`TextInput for ${source}${multiline ? ' (multiline)' : ''}`} />
    ),
}));

describe('Crear post', () => {
    it('debe cargar la pantalla de crear post', () => {
        render(<CreatePost />);
        expect(screen.getByPlaceholderText('ReferenceInput for userId')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('TextInput for title')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('TextInput for body (multiline)')).toBeInTheDocument();
    });
});
