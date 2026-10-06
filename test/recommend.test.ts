import { describe, expect, test } from 'vitest'
import { recommend } from '../src/domain/recommend'
import { menu } from '../src/domain/menu'

const sampleMenu: menu[] = [
  { code: 'A', name: 'a', price: 100 },
  { code: 'B', name: 'b', price: 250 },
  { code: 'C', name: 'c', price: 400 },
]
const lowestPrice = 100
const budgets = [100, 199, 250, 999, 1000, 3000]
const trials = 50

const total = (items: menu[]) => items.reduce((acc, cur) => acc + cur.price, 0)

describe('recommend', () => {
  test.each(budgets)('stays within a budget of %i', (budget) => {
    for (let i = 0; i < trials; i++) {
      expect(total(recommend(budget, sampleMenu))).toBeLessThanOrEqual(budget)
    }
  })

  test.each(budgets)('returns only items from the menu for %i', (budget) => {
    for (let i = 0; i < trials; i++) {
      for (const item of recommend(budget, sampleMenu)) {
        expect(sampleMenu).toContainEqual(item)
      }
    }
  })

  test.each(budgets)('leaves less than the cheapest price unspent for %i', (budget) => {
    for (let i = 0; i < trials; i++) {
      const rest = budget - total(recommend(budget, sampleMenu))
      expect(rest).toBeLessThan(lowestPrice)
    }
  })

  test('returns nothing when the budget is below the cheapest item', () => {
    expect(recommend(lowestPrice - 1, sampleMenu)).toEqual([])
    expect(recommend(0, sampleMenu)).toEqual([])
  })

  test('returns the cheapest item when the budget equals its price', () => {
    expect(recommend(lowestPrice, sampleMenu)).toEqual([sampleMenu[0]])
  })
})
