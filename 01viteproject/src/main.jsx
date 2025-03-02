import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <h1>
      Hello Ajeet
    </h1>
  )
}

const customElement={
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank',
       },
       children:'Click me to visit Google'

}

const anotherElement="Hii"
const reactElement=React.createElement(
  'a',
  {href:"http://google.com",target:"_blank"},
  'click me to visit site',
  anotherElement
)
createRoot(document.getElementById('root')).render(
 
   // customElement  // it will not render because in there 
                      // is some predefined attributes is there so our given attribute will not work

    reactElement                 
)
