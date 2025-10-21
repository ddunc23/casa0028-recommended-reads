import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './tw-styles.css'
import TitleBar from './components/TitleBar'

function App() {

  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  return (
    <div className="mx-auto max-w-screen-xl bg-gray-50 min-h-screen">
      <TitleBar />
    </div>
  )
}

export default App
