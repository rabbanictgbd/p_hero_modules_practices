// export default function ToDo({name, status}){
//     return(
//         <div>
//             <h3>task:{name}, {status} </h3>
//         </div>
//     )
// }

// export default function ToDo({name, status, time="counting..."}){
//    if(status=== true){
//     return(
//         <li>Done: {name}, {time} </li>
//     )
//    } else{
//     return(
//         <li>Pending: {name} </li>
//     )
//    }
// }

// export default function ToDo({name, status, time="counting..."}){
//     return status?<li>completed {name}</li>: <li>incomplete: {name} </li>
//  }
export default function ToDo({name, status, time="counting..."}){
    return status && <li>completed {name}</li>
 }

// export default function ToDo({name, status, time="counting..."}){
//     return status || <li>incomplete: {name}</li>
//  }