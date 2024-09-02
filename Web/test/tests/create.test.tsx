import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { CreatePost } from '../src/posts'; 

describe('Crear post', () => {
    it('debe cargar la pantalla de crear post', () => {
        render(<CreatePost />);
        expect(screen.queryByText(/./)).toBeNull();
    });
});
