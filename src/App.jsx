import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav_Bar from './components/Nav_bar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav_Bar/>
    </>
  )
}

export default App
