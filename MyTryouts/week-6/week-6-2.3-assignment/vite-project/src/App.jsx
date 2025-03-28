import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

// Create an app that polls the sum server 
// Gets the current set of TODOs 
// Renders it on screen 
// https://sum-server.100xdevs.com/todos

function App() {
  const [todos, setTodos] = useState([]);
  const url = "https://sum-server.100xdevs.com/todos";
  useEffect(()=>{
    fetch(url).then(async (res)=>{
      const json = await res.json();
      setTodos(json.todos);
    })
  },[])
  return (
    <>
     {todos.map((todo)=>{
      return(
        <Display title = {todo.title} description = {todo.description}></Display>
      )
     })}
    </>
  )
  function Display(props){
   <>
     <div>
     {props.title} <br />
     {props.description}
     </div>
   </>
  }
}

export default App
