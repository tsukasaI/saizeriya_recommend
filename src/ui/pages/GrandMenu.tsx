import { Link } from 'react-router'
import '../../infrastructure/menu'
import { MenuList } from '../components/MenuList'
import { useGrandMenu } from '../hooks/useGrandMenu'

export const GrandMenu: React.FC = () => {
  const grandMenu = useGrandMenu()
  return (
    <>
      <h1>Saizeriya Recommend</h1>
      <h2>グランドメニュー</h2>
      <MenuList menu={grandMenu} />
      <Link to="/">レコメンドへ</Link>
    </>
  )
}
