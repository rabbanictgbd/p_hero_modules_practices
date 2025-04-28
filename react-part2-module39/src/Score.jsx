import { useState } from 'react'
import './App.css'
export default function Score() {
    const [run, setRun]=useState(0)
    const [single, setSingle]=useState(0)
    const [four, setFour]=useState(0)
    const [six, setSix]=useState(0)
    
    const singleHandler=()=>{
        const updatedRun=run+1
        setRun(updatedRun)
        const updatedSingle=single+1
        setSingle(updatedSingle)
    }
    const foureHandler=()=>{
        const updatedRun=run+4
        setRun(updatedRun)
        const updatedFour=four+1
        setFour(updatedFour)
    }
    
    const sixHandler=()=>{
        const updatedRun=run+6
        setRun(updatedRun)
        const updatedSix=six+1
        setSix(updatedSix)
    }
    return (
        <div className='border'>
            <h3>Name: Mr. Pavel </h3>
            {run==50 && <p> wow! your score is 50</p>}
            {run>50 && <p> wow! your score is 50+</p>}
            <h1>Score: {run} </h1>
            <button onClick={singleHandler}>Single ({single}) </button>
            <button onClick={foureHandler}>Four ({four}) </button>
            <button onClick={sixHandler}>Six ({six})</button>
        </div>
    )
}