import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button onClick={() => setCount(Math.random()*100)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
