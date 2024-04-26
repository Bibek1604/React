import { useState } from 'react'
import './App.css'
import User from './component/user'

function App() {
  return (
    <>
      <User name="bibek Pnadey" study="softwarica.edu.np" />
      <User name="bp" study="sft.com.np" />
    </>
  )
}

export default App