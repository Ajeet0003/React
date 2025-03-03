import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-excel mb-4'>Tailwind Test</h1>
    <Card name="My Love" btnText="Hello" />
    <Card name="Beautiful" btnText="Hi"/>
    <Card name="Gorgeous" />
    </>
  )
}

export default App
