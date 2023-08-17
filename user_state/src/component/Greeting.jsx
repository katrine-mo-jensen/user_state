import { useState } from "react";

export function Greeting() {
  const [name, setName] = useState("Steve");
  return (
    <>
      <h1>Send en hilsen til {name}</h1>
      <input type="text" onInput={event => setName(event.target.value)}/>
    </>
  );
}
