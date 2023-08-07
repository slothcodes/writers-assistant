import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector} from 'react-redux'
import OutlineForm from './components/OutlineForm'

function App() {
  const [count, setCount] = useState(0)
  const testMessage = useSelector(state => state.test.text)
  console.log(testMessage)
  return (
    <>
      <div className="card">
        <OutlineForm />
        {testMessage}
      </div>
    </>
  )
}

export default App
