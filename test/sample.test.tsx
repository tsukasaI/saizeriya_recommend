import React from 'react';
import { describe, expect, test } from 'vitest'
import App from '../src/App'
import { render, screen } from '@testing-library/react'

describe('sample', () => {
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4)
  })

  test('renders h1 text', () => {
    render(<App />);
    const headerElement = screen.getByText(/Sai/);
    expect(headerElement).toBeInTheDocument();
  });
})
