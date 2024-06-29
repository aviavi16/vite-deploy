/** @jest-environment jsdom */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ToDoList from './ToDoList.jsx';

/**
 * @jest-environment jsdom
 */
test('renders ToDoList component', () => {
    render(<ToDoList />);
    const linkElement = screen.getByText(/To-Do-List/);

      expect(linkElement).toBeInTheDocument();
  });

