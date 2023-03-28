import { useState } from 'react'
import './App.css'
import saizeriyaMenu from './assets/menu.yaml'

const App: React.FC= () => {
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
      <div>
        {menu.map(m => {
          return (
            <>
              <h2>{m.code}</h2>
              <p>{m.name}</p>
              <p>{m.price}</p>
            </>
          )
        })}
      </div>
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
