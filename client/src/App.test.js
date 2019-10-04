import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('contains Main Title Header', () => {

  // Arrange
  const { getByText } = render(<App />);

  // Act - getting the node by text
  getByText(/Women's World Cup Players Search Rankings/i);
  
  // Assertion is if ^^^ is truthy
  });