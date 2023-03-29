import { useState } from 'react'
import './App.css'
import saizeriyaMenu from './assets/menu.yaml'

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const menu = LoadMenu()
  console.log(menu)

  return (
    <div className="App">
      <h1>Saizeriya Recommend</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
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
    </div>
  )
}

type menu = {
  code: string
  name: string
  price: number
}
const LoadMenu = () => {
  return saizeriyaMenu.grand as menu[]
}

export default App
