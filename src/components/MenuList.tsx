import { LoadGrandMenu } from '../api/menu'

export const GrandMenuList = () => {
  const menu = LoadGrandMenu()

  return (
    <ul>
    {menu.map((m) => {
      return (
        <li>
          <b>{m.code}</b>
          <span>
            : {m.name} {m.price}円
          </span>
        </li>
      )
    })}
  </ul>
  )
}
