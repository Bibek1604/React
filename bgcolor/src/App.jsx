
import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
<div className="min-h-screen flex justify-center items-center bg-gray-200">
  <div className="min-h-32 w-120 bg-slate-700 flex flex-col justify-center items-center">

    <div className="min-h-18 w-full flex justify-between items-center bg-zinc-700 p-3 rounded">
      <div className="flex items-center gap-x-3">
        <span></span>
        <input
          type="text"
          value=" Enter your password here" // add {password} here
          className="outline-none py-1 px-3 flex-grow"
          placeholder="password"
          readOnly
        />
      </div>
      <button
        className='outline-none bg-blue-700 text-white px-3 py-1 rounded'
      >
        Copy
      </button>
    </div>

    <div className='flex text-5m gap-x-2 mt-3 items-center'>
      <div className='flex items-center gap-x-3'>
        <input
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
        />
        <label>length: 8</label>
      </div>
      <div className="flex items-center gap-x-3">
        <input
          type="checkbox"
          id="includeCharacter"
          className="cursor-pointer"
        />
        <label to="includeCharacter">Include Characters</label>
      </div>
      <div className="flex items-center gap-x-3">
        <input
          type="checkbox"
          id="includeNumber"
          className="cursor-pointer"
        />
        <label to="includeNumber">Include Numbers</label>
      </div>
    </div>

  </div>
</div>


    </>
  )
}

export default App
