import { useRef, useState } from 'react'

export const Recommend = () => {
  const [count, setCount] = useState(0)
  const priceRef = useRef<HTMLInputElement | null>()
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount((count) => count + 1)
  }
  const handleChangePrice = () => {
    console.log(priceRef.current?.value)
    // const currentInputNumber = Number(e.current.input)
    // if (!Number.isNaN(currentInputNumber)) {
    //   console.log('priceRef', priceRef)
    // }
  }

  return (
    <>
      <input
        type="text"
        inputMode="numeric"
        ref={priceRef}
        onChange={handleChangePrice}
      />
      <div className="card">
        <button onClick={handleChange}>count is {count}</button>
      </div>
    </>
  )
}
