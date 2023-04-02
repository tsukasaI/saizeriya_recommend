import { useRef, useState } from "react";

export const Recommend = () => {
  console.log("rendered");
  const [warning, setWarning] = useState("")
  const priceRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const price = Number(priceRef.current?.value);
    console.log(price)

  };
  const handleChangePrice = () => {
    const currentInputNumber = Number(priceRef.current?.value);
    if (Number.isNaN(currentInputNumber)) {
      setWarning(() => "数字で入力してください")
      priceRef.current!.value = "1000";
      return
    }
    setWarning(() => "")
  };

  return (
    <>
      {warning.length > 0 && <p>{warning}</p>}
      <input
        type="text"
        pattern="[0-9]*"
        inputMode="numeric"
        ref={priceRef}
        onChange={handleChangePrice}
      />
      <div className="card">
        <button onClick={handleChange}>メニューを見る</button>
      </div>
    </>
  );
};
