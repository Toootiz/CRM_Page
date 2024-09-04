import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PostList } from '../src/posts';

jest.mock('react-admin', () => ({
  List: ({ children, filters }: { children: React.ReactNode; filters?: React.ReactNode[] }) => (
    <div>
      <div>
        {filters?.map((filter, index) => (
          <div key={index}>{filter}</div>
        ))}
      </div>
      {children}
    </div>
  ),
  Datagrid: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  TextField: ({ source }: { source: string }) => <span>{`TextField for ${source}`}</span>,
  ReferenceField: ({ source }: { source: string }) => <span>{`ReferenceField for ${source}`}</span>,
  EditButton: () => <button>Edit</button>,
  ReferenceInput: ({ source }: { source: string }) => (
    <select data-testid={`ReferenceInput for ${source}`}>
      <option value="">Select User</option>
      <option value="1">Glenna Reichert</option>
      <option value="2">Clementina DuBuque</option>
    </select>
  ),
  TextInput: ({ source }: { source: string }) => (
    <input placeholder={`TextInput for ${source}`} data-testid={`TextInput for ${source}`} />
  ),
}));

describe('PostList', () => {
  it('debe mostrar y filtrar los posts por usuario', () => {
    render(<PostList />);
    expect(screen.getByPlaceholderText('TextInput for q')).toBeInTheDocument();
    expect(screen.getByTestId('ReferenceInput for userId')).toBeInTheDocument();
    fireEvent.change(screen.getByTestId('ReferenceInput for userId'), {
      target: { value: '1' },
    });

    expect(screen.getByTestId('ReferenceInput for userId')).toHaveValue('1');
  });
});
