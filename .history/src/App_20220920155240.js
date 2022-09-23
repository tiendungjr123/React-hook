import { useState } from "react";

function App() {
  const increase = () => {
    setCounter(counter + 1);
  };
  
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={increase}>Click</button>
    </div>
  );
}

export default App;
