import { LoadGrandMenu } from '../api/menu'

export const GrandMenuList = () => {
  const menu = LoadGrandMenu()

  return (
    <>
      <h2>グランドメニュー</h2>
      <ul>
        {menu.map((m) => {
          return (
            <li key={m.code}>
              <b>{m.code}</b>
              <span>
                : {m.name} {m.price}円
              </span>
            </li>
          )
        })}
      </ul>
    </>
  )
}
