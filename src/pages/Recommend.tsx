import { useRef, useState } from 'react'
import { recommend } from '../features/Recommend'
import { menu } from '../models/menu'
import { MenuList } from '../components/MenuList'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { grandMenuState } from '../store/atom'

export const Recommend = () => {
  const menuMemos = useRecoilValue<menu[]>(grandMenuState)
  const [warning, setWarning] = useState('')
  const [recommendMenu, setRecommendMenu] = useState<menu[]>()
  const priceRef = useRef<HTMLInputElement>(null)
  const handleDecideBudget = (e: React.MouseEvent<HTMLButtonElement>) => {
    const price = Number(priceRef.current?.value)
    const recommended = recommend(price, menuMemos)
    setRecommendMenu(() => recommended)
  }
  const handleChangePrice = () => {
    const currentInputNumber = Number(priceRef.current?.value)
    if (Number.isNaN(currentInputNumber)) {
      setWarning(() => '数字で入力してください')
      priceRef.current!.value = '1000'
      return
    }
    setWarning(() => '')
  }

  return (
    <>
      <h1>予算を入力してボタンをクリック</h1>
      {warning.length > 0 && <p>{warning}</p>}
      <input
        type="text"
        pattern="[0-9]*"
        inputMode="numeric"
        ref={priceRef}
        onChange={handleChangePrice}
      />
      <div className="card">
        <button onClick={handleDecideBudget}>予算を決定</button>
        <ul>{recommendMenu && <MenuList menu={recommendMenu} />}</ul>
        <p>
          合計:{' '}
          {recommendMenu &&
            recommendMenu.reduce((acc, cur) => acc + cur.price, 0)}
          円
        </p>
      </div>
      <Link to="/menu">メニュー一覧へ</Link>
    </>
  )
}
