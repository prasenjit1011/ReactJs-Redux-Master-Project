import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{margin:"auto", border:"1px solid #000"}}>
        <Outlet />
      </div>
    </>
  )
}

export default App
