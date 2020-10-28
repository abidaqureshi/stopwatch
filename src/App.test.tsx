import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Check if Countdown render', () => {
  render(<App />);
  const linkElement = screen.getByText(/Countdown/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check if Start Button render', () => {
  render(<App />);
  const ButtonElement = screen.getByText(/Start/i);
  expect(ButtonElement).toBeInTheDocument();
});
