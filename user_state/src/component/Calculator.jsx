import { useState } from "react";

export function Calculator() {
  const [result, setResult] = useState(0);

  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);

  const add = () => {
    const res = Number(valueOne) + Number(valueTwo);
    setResult(res);
  };

  const subtract = () => {
    const res = Number(valueOne) - Number(valueTwo);
    setResult(res);
  };

  return (
    <>
      <h2>Result: {result}</h2>
      <input
        onChange={(event) => setValueOne(event.target.value)}
        value={valueOne}
        type="number"
        placeholder="value 1"
      />
      <input
        onChange={(event) => setValueTwo(event.target.value)}
        value={valueTwo}
        type="number"
        placeholder="value 2"
      />
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </>
  );
}
