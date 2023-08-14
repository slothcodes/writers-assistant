import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector} from 'react-redux'
import OutlineContainer from './containers/OutlineContainer'
import EditorContainer from './containers/EditorContainer'

function App() {
  const [editorState, setEditorState] = useState(false)
  const editorHandler = () => {
      setEditorState(!editorState)
    }
  
  return (
    <>
      <div className="card">
        {editorState ? <EditorContainer setEditorState = {editorHandler}/> : <OutlineContainer setEditorState = {editorHandler}/>}

      </div>
    </>
  )
}

export default App
