import './App.css'
import { MenuList } from './components/MenuList'
import { Recommend } from './components/Recommend'
import { LoadGrandMenu } from './api/menu'

const App: React.FC = () => {
  const grandMenu = LoadGrandMenu()

  return (
    <div className="App">
      <h1>Saizeriya Recommend</h1>
      <h2>グランドメニュー</h2>
      <MenuList menu={grandMenu} />
      <Recommend />
    </div>
  )
}

export default App
