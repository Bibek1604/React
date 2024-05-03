import React, { useState, useCallback, useEffect , useRef} from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null); // Corrected variable name

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}?>:[]'+=-";
    
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed ,setPassword]);

  const copyPasswordToClipboard = useCallback(function(){
    passwordRef.current?.select()
    passwordRef.current?.range()
    window.navigator.clipboard.writeText(password)
    
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length ,numberAllowed,charAllowed,passwordGenerator]); 

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-800 bg-gray-300'>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef} // Corrected ref name
          />
          <button 
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-start gap-x-1'>
            <input 
              type="range" 
              min={5}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              checked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              checked={charAllowed}
              id='characterInput'
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor='characterInput'>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
