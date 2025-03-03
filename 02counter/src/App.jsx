import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(17)

 // let counter=17
  const addValue=()=>{

    // counter=counter+1
    if(counter<20){
    setCounter(counter+1)
    setCounter(prevCounter=>prevCounter+1)
    console.log("Added ", Math.random(), counter)
    }
  }
  const removeValue=()=>{
    if(counter>0 ){
    setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Ajeet And React</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >add value</button>
      <br/>
      <button
      onClick={removeValue}
      >remove value</button>
        
    </>
  )
}

export default App
