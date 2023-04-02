import React from 'react'
import { describe, expect, test, expectTypeOf } from 'vitest'
import { GrandMenuList } from '../src/components/MenuList'
import { render, screen } from '@testing-library/react'
import { LoadGrandMenu } from '../src/api/menu'
import { menu } from '../src/model/menu'

describe('GrandMenuList', () => {
  test('parse yaml grand menu', () => {
    const result = LoadGrandMenu()
    expectTypeOf(result).items.toEqualTypeOf<menu>()
  })

  test('renders h1 text', () => {
    render(<GrandMenuList />)
    const headerElement = screen.getByRole('list')
    expect(headerElement).toBeInTheDocument()
  })
})
