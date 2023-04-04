import { Link } from 'react-router-dom'
import { MenuList } from '../components/MenuList'
import { useRecoilValue } from "recoil";
import { grandMenuState } from '../store/atom'
import { menu } from '../models/menu';

export const GrandMenu: React.FC = () => {
  const menuMemos = useRecoilValue<menu[]>(grandMenuState)
  return (
    <>
      <h1>Saizeriya Recommend</h1>
      <h2>グランドメニュー</h2>
      <MenuList menu={menuMemos} />
      <Link to="/">レコメンドへ</Link>
    </>
  )
}
