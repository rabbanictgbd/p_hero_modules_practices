import { useState } from 'react'

import './App.css'
import ToDo from './toDo'
import Reciter from './Reciter'
import Singer from './Singer'

function App() {
//  const Reciter=["Rayhan", "Shaban", "Abu Reja"]
 const Reciters=["Rayhan", "Shaban", "Abu Reja", "Ahmad"]
 const Singers=[
   {id:1, name: "Abu Rayhan", age: 30},
   {id:2, name: "Mahfuz", age: 33},
   {id:3, name: "Minhaz", age: 34}
 ]
const time=50
  return (
    <>
      <h1>React core concept</h1>
      <ToDo name="job" status= {true} time={time} ></ToDo>
      <ToDo name="req" status= {false} ></ToDo>
      <ToDo name="report" status= {true} time="100" ></ToDo>
      <ToDo name="report" status= {true}  ></ToDo>
     {Reciters.map(Recite=><Reciter Reciter={Recite}></Reciter> )}
     {Singers.map(singer=><Singer key={singer.id} singer={singer}></Singer>)}
    </>
  )
}

export default App
