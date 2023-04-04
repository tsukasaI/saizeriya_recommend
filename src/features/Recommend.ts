import { menu } from '../models/menu'


export const recommend = (price: number, menu: menu[]) => {
  const result: menu[] = []
  const lowestPrice = menu.reduce((prev, curr) =>
    prev.price <= curr.price ? prev : curr
  ).price
  while (price >= lowestPrice) {
    const withinBadgetMenu = menu.filter((item) => item.price <= price)
    const randomMenu = withinBadgetMenu[Math.floor(Math.random() * withinBadgetMenu.length)]
    result.push(randomMenu)
    price = price - randomMenu.price
  }
  return result
}
