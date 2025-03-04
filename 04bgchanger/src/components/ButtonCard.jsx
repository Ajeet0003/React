import React, { useState } from 'react'

function ButtonCard({colorProp}) {
     const [color, setColor]=useState("olive")
    return (
        <button
        onClick={()=>setColor("red")}
       className="outline-none px-4 pu-l rounded-full text-white shadow-lg"
       style={{backgroundColor:"red"}}
       >red</button>

        // <button
        // // onClick={()=>setColor(colorProp)}
        // className="outline-none px-4 pu-l rounded-full text-white shadow-lg"
        // style={{backgroundColor:color}}
        // >{color}</button>
    )
}

export default ButtonCard
