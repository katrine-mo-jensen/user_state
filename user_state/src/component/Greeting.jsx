import { useState } from "react";

export function Greeting() {
  const [name, setName] = useState("Steve");
  return (
    <>
      <h2>Send en hilsen til {name}</h2>
      <input type="text" onInput={event => setName(event.target.value)}/>
    </>
  );
}
