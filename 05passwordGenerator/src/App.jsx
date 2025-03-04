import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow,setNumberAllow]=useState(false)
  const [charAllow,setCharAllow]=useState(false)
  const [password,setPassword]=useState("")

  const passwordGenerator=useCallback(()=>{
    
  },[length,numberAllow,charAllow,setPassword])

  return (
    <>
    <h1 text-4xl text-center>Password Generator</h1>
    </>
  )
}

export default App
