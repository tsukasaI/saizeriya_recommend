import { useRef, useState } from 'react'
import { recommend } from '../features/Recommend'
import { menu } from '../models/menu'
import { MenuList } from '../components/MenuList'
import { Link } from 'react-router-dom'

export const Recommend = () => {
  const [warning, setWarning] = useState('')
  const [recommendMenu, setRecommendMenu] = useState<menu[]>()
  const priceRef = useRef<HTMLInputElement>(null)
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const price = Number(priceRef.current?.value)
    const recommended = recommend(price)
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
    <div className="App">
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
        <button onClick={handleChange}>予算を決定</button>
        <ul>{recommendMenu && <MenuList menu={recommendMenu} />}</ul>
        <p>
          合計:{' '}
          {recommendMenu &&
            recommendMenu.reduce((acc, cur) => acc + cur.price, 0)}
          円
        </p>
      </div>
      <Link to="/menu">メニュー一覧へ</Link>
    </div>
  )
}
