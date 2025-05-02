import { useState } from "react"

export default function Toggle(){

    const [hide,useHide]=useState()
    return(
        <div className="border">
            <h3>Hello, React Learner! {hide} </h3>
            <button >Show</button>
            <button>Hide</button>
        </div>
    )
}