import { useState } from "react"

export default function Count(){

    const [count, setCount]=useState(0)
    const countPlus=() =>{
        setCount(count+1)
    } 
    const countMinus=() =>{
        setCount(count-1)
    } 
    const countReset=() =>{
        setCount(0)
    } 
    return(
        <div className="border">
            <h2>Count: {count} </h2>
            <button onClick={countPlus}>+1</button>
            <button onClick={countMinus}>-1</button>
            <button onClick={countReset}>Reset</button>
        </div>
    )
}