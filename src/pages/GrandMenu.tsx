import { Link } from 'react-router'
import { MenuList } from '../components/MenuList'
import { LoadGrandMenu } from '../api/menu'

const grandMenu = LoadGrandMenu()

export const GrandMenu: React.FC = () => {
  return (
    <>
      <h1>Saizeriya Recommend</h1>
      <h2>グランドメニュー</h2>
      <MenuList menu={grandMenu} />
      <Link to="/">レコメンドへ</Link>
    </>
  )
}
