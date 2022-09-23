import {useState} from 'react';


function App() {
  
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
