import './App.css'
import { GrandMenuList } from './components/MenuList'
import { Recommend } from './components/Recommend'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Saizeriya Recommend</h1>
      <GrandMenuList />
      <Recommend />
    </div>
  )
}

export default App
