import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);


function addValue(){
 setCounter(counter+1) 
}

  function removeValue() {
    setCounter(counter - 1);
  }

  return (
    <>  
<h1>Counter:{counter}</h1>
<button onClick={addValue}>add</button>
<br />
<br />
<button onClick={removeValue}>Less</button>
    </>
  );
}

export default App;
