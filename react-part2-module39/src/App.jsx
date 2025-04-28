import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Score from './Score'

function App() {

function eventhandler(){
  alert("I am clicked") 
}
const handleAdd5=(add)=>{
  const sum=add+5
  alert(sum)
}
  return (
    <>
     
      <h3>Vite + React</h3>
      <Counter></Counter>
      <Score></Score>
      <button onClick={eventhandler}>click me</button>
      <button onClick={function eventhandler2(){ alert("I'm clicked 2")}}>click me2</button>
      <button onClick={()=>{ alert("I'm clicked 3")}}>click me3</button>
      <button onClick={()=>handleAdd5(10)}>click me4</button>

      
      
    </>
  )
}

export default App
