import { Link } from 'react-router-dom'
import { MenuList } from '../components/MenuList'
import { LoadGrandMenu } from '../api/menu'

export const GrandMenu: React.FC = () => {
  const grandMenu = LoadGrandMenu()

  return (
    <div className="App">
      <h1>Saizeriya Recommend</h1>
      <h2>グランドメニュー</h2>
      <MenuList menu={grandMenu} />
      <Link to="/">レコメンドへ</Link>
    </div>
  )
}
