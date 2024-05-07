
import { useCallback, useState ,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const[length,setLength ]=useState(8)
  const[numberAllowed,setNumberAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("")

  const passwordGenerator =useCallback(() =>{
    let pass=""
    let str="ABCDEFGHIJKLMNNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str +="0123456789"
    if(charAllowed) str += "!@#$%^&*(){[<>?/]}"

    for(let i=1; i <= length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
      
    }
    setPassword(pass )

  } ,[length, numberAllowed, charAllowed, setPassword])

  useEffect (()=> {
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const passwordRef=useRef(null)

  const copyPassword=useCallback(() =>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
    alert("your password has been copied")
  },[password])
  return (
    <>
<div className="min-h-screen flex justify-center items-center bg-gray-200">
  <div className="min-h-32 w-120 bg-slate-700 flex flex-col justify-center items-center">

    <div className="min-h-18 w-full flex justify-between items-center bg-zinc-700 p-3 rounded">
      <div className="flex items-center gap-x-3">
        <span></span>
        <input
          type="text"
          value={password} // add {password} here
          className="outline-none py-1 px-3 flex-grow"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
      </div>
      <button
      onClick={copyPassword}
        className='outline-none bg-blue-700 text-white px-3 py-1 rounded'
      >
        Copy
      </button>
    </div>

    <div className='flex text-5m gap-x-2 mt-3 items-center'>
      <div className='flex items-center gap-x-3'>
        <input
          type='range'
          min={10}
          max={100}
          value={length}
          className='cursor-pointer'
                    onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>length: {length} </label>
      </div>
      <div className="flex items-center gap-x-3">
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() =>{
            setNumberAllowed((prev) => !prev);
          }}
        />
        <label to="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-3">
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="charAllowed"
          onChange={() =>{
            setCharAllowed((prev) => !prev);
          }}
          className="cursor-pointer"
        />
        <label to="charAllowed">Character</label>
      </div>
    </div>

  </div>
</div>


    </>
  )
}

export default App
