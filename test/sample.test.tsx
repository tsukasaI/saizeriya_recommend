import React from 'react'
import { describe, expect, test, expectTypeOf } from 'vitest'
import { MenuList } from '../src/components/MenuList'
import { render, screen } from '@testing-library/react'
import { LoadGrandMenu } from '../src/api/menu'
import { menu } from '../src/model/menu'

describe('MenuList', () => {
  const grandMenu = LoadGrandMenu()
  test('parse yaml grand menu', () => {
    expectTypeOf(grandMenu).items.toEqualTypeOf<menu>()
  })

  test('renders h1 text', () => {
    render(<MenuList menu={grandMenu} />)
    const headerElement = screen.getByRole('list')
    expect(headerElement).toBeInTheDocument()
  })
})
