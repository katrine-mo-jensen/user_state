import { useState } from "react";

export function Counting() {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }
  return (
    <>
      <h2>Du har klikket på knappen {count} antal gange</h2>
      <button onClick={() => updateCount()}>Update</button>
    </>
  );
}
