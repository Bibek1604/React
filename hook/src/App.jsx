import { useState } from 'react'

import './App.css'
import Input from './components/Input.1'
import useCurrenyInfo from './hook/useCurrencyinfo'

function App() {
  const [amount , setAmount]=useState(0)
  const [from,setForm]=useState("usd")
  const [to , setTo]=useState('"npr')
  const [ convertedAmount , setConvertedAmount] = useState(0)
  const currencyInfo = useCurrenyInfo(from)
  return (
    <>
    <h1 className='text-3xl bg-orange-500'></h1>
    Currency app

  
    </>
  )
}

export default App
