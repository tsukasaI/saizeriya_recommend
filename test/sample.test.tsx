import React from 'react'
import { describe, expect, test } from 'vitest'
import { GrandMenuList } from '../src/components/MenuList'
import { render, screen } from '@testing-library/react'

describe('sample', () => {
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4)
  })

  test('renders h1 text', () => {
    render(<GrandMenuList />)
    const headerElement = screen.getByText(/グランドメニュー/)
    expect(headerElement).toBeInTheDocument()
  })
})
