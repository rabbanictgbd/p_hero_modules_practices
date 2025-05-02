import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Score from './Score'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'
import Count from './Task39Count'
import Toggle from './Task39Toggle'
const fetchFriends= async()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}
const fetchPosts= async()=>{
  const res= await fetch("https://jsonplaceholder.typicode.com/posts")
 return res.json();
}

function App() {
 
  
  const postsPromise= fetchPosts();
  const friendsPromise= fetchFriends();
  const fetchUsers=fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

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
      <Toggle></Toggle>
      <Count></Count>
      <Suspense fallback={<h3>Posts ate coming...</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>
      <Suspense fallback={<h3>Friends are coming for treat...</h3>} >
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
<Suspense fallback ={<h3>Loading...</h3>}>
  <Users fetchUsers={fetchUsers}></Users>
</Suspense>
      
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
