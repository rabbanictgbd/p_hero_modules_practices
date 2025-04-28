import { useState } from "react";


export default function Counter(){
    const counterStyle={
        border: "2px solid tomato",
        borderRadius: "12px"
    }
    const [count, setCount]=useState(0); 
    const handleCount=()=>{
        setCount(count+1)
    }

    return(
        <div style={counterStyle}>
            <h2>count:{count} </h2>
            <button onClick={handleCount} >add</button>
        </div>
    )
}