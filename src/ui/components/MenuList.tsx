import { menu } from '../../domain/menu'

type propMenu = {
  menu: menu[]
}

export const MenuList = (props: propMenu) => {
  return (
    <>
      <ul>
        {props.menu.map((m, idx) => {
          return (
            <li key={`${m.code}-${idx}`}>
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
