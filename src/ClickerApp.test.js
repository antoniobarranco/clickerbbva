import React from 'react';
import { render, screen } from '@testing-library/react';
import ClickerApp from './ClickerApp';

test('renders learn react link', () => {
  render(<ClickerApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
