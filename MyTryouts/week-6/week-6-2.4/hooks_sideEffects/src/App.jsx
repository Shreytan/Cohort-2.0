import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todos") // Ensure valid URL
//       .then(async (res) => {
//         const td = await res.json(); // Call .json() correctly
//         setTodos(td.todos);
//       })
//       .catch((err) => console.error("Error fetching todos:", err)); // Error handling
//   }, []);


//   return (
//     <>
//       {todos.map((todo) => {
//         <Display  title={todo.title} description={todo.description} />
// })}
//     </>
//   )

//   function Display (props){
//     return (
//       <>
//       <h1>{props.title}</h1>
//       <p>{props.description}</p>
//       </>
//     )
//   }

// -----------------------------------------------------QUESTION-----------------------------------
const [select,setSelect] = useState(0);
return (
  <>
  <button onClick={()=>{
    setSelect(1);
  }}>1</button>

  <button onClick={()=>{
    setSelect(2);
  }}>2</button>

<button onClick={()=>{
  setSelect(3);
}}>3</button>

<Todo id = {select}></Todo>
</>
)
function Todo({id}){

  const [todos,setTodos] = useState([]);

  useEffect(()=>{
    axios.get("https:/sum-server/100xdevs/todos?id ="+id)
    .then((res)=>{
      setTodos(res.data.todos);
    })
  },[id])
  return(
    <>
    <h1>{todos.title}</h1>
    <p>{todos.description}</p>
    </>
  )
}
}


export default App
