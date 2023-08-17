import "./App.css";
import { Calculator } from "./component/Calculator";
import { Counting } from "./component/Counting";
import { Greeting } from "./component/Greeting";

function App() {
  return (
    <>
      <Greeting />
      <Counting />
      <Calculator/>
    </>
  );
}

export default App;
