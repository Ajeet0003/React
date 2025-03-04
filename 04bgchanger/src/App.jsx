import { useState } from "react"
import ButtonCard from "./components/ButtonCard"


function App() {

  const [color, setColor]=useState("olive")
  return (
    <div className="w-full h-screen duration-200"
        style={{backgroundColor:color}}
    >
      <div className="fixed flex felx-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      
        <button
         onClick={()=>setColor("red")}
        className="outline-none px-4 pu-l rounded-full text-white shadow-lg"
        style={{backgroundColor:"red"}}
        >Red</button>
            <button
         onClick={()=>setColor("green")}
        className="outline-none px-4 pu-l rounded-full text-white shadow-lg"
        style={{backgroundColor:"Green"}}
        >Green</button>
            <button
         onClick={()=>setColor("blue")}
        className="outline-none px-4 pu-l rounded-full text-white shadow-lg"
        style={{backgroundColor:"Blue"}}
        >Blue</button>
            <button
         onClick={()=>setColor("Black")}
        className="outline-none px-4 pu-l rounded-full text-white shadow-lg"
        style={{backgroundColor:"Black"}}
        >Black</button>

<button
         onClick={()=>setColor("Grey")}
        className="outline-none px-4 pu-l rounded-full text-white shadow-lg"
        style={{backgroundColor:"Grey"}}
        >Grey</button>
               <button
         onClick={()=>setColor("Olive")}
        className="outline-none px-4 pu-l rounded-full text-white shadow-lg"
        style={{backgroundColor:"Olive"}}
        >Olive</button>
               <button
         onClick={()=>setColor("Yellow")}
        className="outline-none px-4 pu-l rounded-full text-black shadow-lg"
        style={{backgroundColor:"Yellow"}}
        >Yellow</button>
                    <button
         onClick={()=>setColor("Pink")}
        className="outline-none px-4 pu-l rounded-full text-white shadow-lg"
        style={{backgroundColor:"Pink"}}
        >Pink</button>

         {/* <ButtonCard color="Red"  onClick={()=>setColor(red)}/> 
         <ButtonCard color="Green"/> 
         <ButtonCard color="Blue"/> 
         <ButtonCard color="Black"/>  */}
         
        </div>
        
        </div>

    </div>
    
  )
}

export default App
