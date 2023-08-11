import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector} from 'react-redux'
import OutlineContainer from './containers/OutlineContainer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="card">
        <OutlineContainer />

      </div>
    </>
  )
}

export default App
