import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 20) setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter >= 1) setCounter(counter - 1);
  };
  return (
    <>
      <div
        style={{ textAlign: "center", marginTop: "50px", marginLeft: "500px" }}
      >
        <h1>Chai aur Code</h1>
        <h2>Counter value : {counter}</h2>
        <button onClick={addValue}>Add Value | {counter}</button>
        <br />
        <br />
        <button onClick={removeValue}>Remove Value | {counter}</button>
        <p>footer : {counter}</p>
      </div>
    </>
  );
}

export default App;
