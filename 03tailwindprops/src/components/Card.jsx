import React from 'react'

//function Card(props) {
  // function Card({name,btnText="Save"}) {
    function Card({name,btnText}) {
    return (
        
     <div className="flex flex-col rounded-xl  p-4"
     style={{
       border: '0.88px solid',

       backdropFilter: 'saturate(180%) blur(14px)',
       background: ' #ffffff0d',
     }}
   >
     <div>
       <img
         src="https://static.toiimg.com/thumb/imgsize-23456,msid-107200677,width-600,resizemode-4/107200677.jpg"
         alt="nft-gif"
         width="400"
         height="400"
         className="rounded-xl"
       />
     </div>
     <div className="flex flex-col  rounded-b-xl py-4 ">
       <div className="flex justify-between">
         {/* <h1 className="font-RubikBold ">{props.name}</h1> */}
         <h1 className="font-RubikBold ">{name}</h1>
         <button>{btnText || "Click me"}</button>
       </div>

     </div>
   </div>
    )
}

export default Card
