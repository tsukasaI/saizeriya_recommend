import { useState } from 'react'
import './App.css'
import { GrandMenuList } from './components/MenuList'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Saizeriya Recommend</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    <GrandMenuList />
    </div>
  )
}

export default App
