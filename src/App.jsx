import TitleBar from './components/TitleBar'
import MapDisplay from './components/MapDisplay'
import PlaqueModal from './components/PlaqueModal'
import { useState } from 'react'
import './tw-styles.css'       
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <TitleBar />
      <MapDisplay longitude={-0.133149} latitude={51.524284} zoom={14} />
      {isModalOpen ? <PlaqueModal /> : null}
    </div>
  )
}

export default App
