/** @jest-environment jsdom */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ToDoList from './ToDoList.jsx';

/**
 * @jest-environment jsdom
 */
test('renders ToDoList component', () => {
    render(<ToDoList />);
  });

  /**
 * @jest-environment jsdom
 */
  test('renders ToDoList component with title', () => {
    render(<ToDoList />);
    const todoElement = screen.getAllByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
  });