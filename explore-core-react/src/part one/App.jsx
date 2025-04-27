import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      <Devices device="laptop" price="50000"></Devices>
      <Devices device="tab" ></Devices>
      <Devices device="mobile" price="10000"></Devices>
      <Developer name="Rabbani" tech="js"></Developer>
      <Developer name="abdul kader" tech="java"></Developer>
      <Developer name="Rabbani" tech="python"></Developer>
      <Cricket></Cricket>
      <Person></Person>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      
    </>
  )
}

function Devices({device,price ="NotPublished"}){
  return(
    <div className='person'>
      <h3>Name: {device} </h3>
      <p>price: {price} </p>
    </div>
  )
}

function Developer(props){
console.log(props)
  return(
    <div style={{
      color: "gray",
      border: "solid",
      margin: "3px",
      borderRadius: "13px"
    }}>
      <h2>Developer: {props.name} </h2>
      <h3>Technology : {props.tech} </h3>
    </div>
  )
}

function Cricket(){
const name="Mr. Sakib"
const score=44
  return(
  <div className='border'>
    <h3>The Cricketer name:{name} </h3>
    <h2>Score: {score} </h2>
  </div>
  )
}

function Person(){
  const name= "Abdul Kader Rabbani"
  const age= 28
  const personStyle={
    color: "red",
    borderRadius: "10px",
    border: "solid green",
   
  }
  return(
    <div  className='person'>
    <h3 style={personStyle}>I am a person: {name} {age} </h3>
    <p style={{
      color: "green",
      border: "2px solid gray",
      borderRadius: "12px"
    }}>This is the test paragraph</p>
    </div>
  )
}

export default App
