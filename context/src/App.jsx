import { useState } from 'react'
import UserContextProvider from './context/userContentProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)
  return (
    <UserContextProvider>

      <h1>Learning react cause react is superPowerfull </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
