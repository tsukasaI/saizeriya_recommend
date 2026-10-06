import { describe, expect, test } from 'vitest'
import { MenuList } from '../src/ui/components/MenuList'
import { render, screen } from '@testing-library/react'
import { LoadGrandMenu } from '../src/infrastructure/menu'

describe('MenuList', () => {
  const grandMenu = LoadGrandMenu()

  test('renders h1 text', () => {
    render(<MenuList menu={grandMenu} />)
    const headerElement = screen.getByRole('list')
    expect(headerElement).toBeInTheDocument()
  })
})
