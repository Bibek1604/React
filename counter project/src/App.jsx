import { useState } from 'react';
import './App.css';

function App(){
  const [counter, setCounter] = useState(0);


function add(){
  setCounter(counter+1)
}

function less(){
  setCounter(counter-1)
}

function clear(){
  setCounter(0)
}

return (

  <>

    <h1>COunter App</h1>
    <p>counter:{counter}</p>
    <button onClick={add}>Add</button>

    <button onClick={less}>Less</button>

    <button onClick={clear}> Clear</button>
  </>
);
}

export default App;