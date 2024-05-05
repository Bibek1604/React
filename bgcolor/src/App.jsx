
import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] =useState('black')


  return (




    <>
    <div className='flex w-full bg-gray-400 min-h-24 items-center justify-between' style={{backgroundColor:color}}>

<div onClick={()=>setColor("green")}  className='min-h-14 w-14 bg-green-300'>green</div>
<div onClick={()=>setColor("blue")}className='min-h-14 w-14 bg-blue-300'>blue</div>
<div onClick={()=>setColor("yellow")}className='min-h-14 w-14 bg-yellow-300'>yellow</div>
<div onClick={()=>setColor("red")}className='min-h-14 w-14 bg-red-300'>red</div>
<div onClick={()=>setColor("purple")}className='min-h-14 w-14 bg-purple-300'>purple</div>

<div onClick={()=>setColor("red")}className='min-h-14 w-14 bg-red-800'>red</div>


</div>

    </>
  )
}

export default App
