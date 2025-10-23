import { useState } from 'react'
import './tw-styles.css'
import TitleBar from './components/TitleBar'
import MapDisplay from './components/MapDisplay'
import PlaqueModal from './components/PlaqueModal'

function App() {

  const [count, setCount] = useState(0)

  const [isModalOpen, setIsModalOpen] = useState(true)

  function increment() {
    setCount(count + 1)
  }

  return (
    <div className="mx-auto max-w-screen-xl bg-gray-50 min-h-screen">
      <TitleBar title="📚 OpenPlaques Reading Recommendations" />
      <MapDisplay />
      {isModalOpen && <PlaqueModal setIsModalOpen={setIsModalOpen} />}
    </div>
  )
}

export default App
