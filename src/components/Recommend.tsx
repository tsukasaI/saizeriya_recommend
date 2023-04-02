import { useState } from 'react'

export const Recommend = () => {
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(1000)
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount((count) => count + 1)
    console.log(price)
  }
  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentInputNumber = Number(e.target.value)
    if (!Number.isNaN(currentInputNumber)) {
      setPrice(() => currentInputNumber)
    }
  }

  return (
    <>
      <input type="text" inputMode="numeric" value={price} onChange={handleChangePrice} />
      <div className="card">
        <button onClick={handleChange}>count is {count}</button>
      </div>
    </>
  )
}
