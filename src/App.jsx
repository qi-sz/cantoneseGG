import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>wordle</h1>
    <Guess/>
    <h1>won/loss</h1>
    <Querty/>
    </div>
  )
}

export default App
