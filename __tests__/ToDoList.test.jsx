import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ToDoList from '../src/ToDoList';

describe('testing functionality', ()=> {
    it('my test', () => {
    render(<ToDoList/>);
    const linkElement = screen.getAllByText("test my app using unit testing");
        
    expect(linkElement[0]).toBeInTheDocument();
    //young man! you must fail!
    })
    
});

