import { useState } from 'react';
import './App.css'
// let state = {
//   count : 0
// }//doesn't work cause u gottta keep track of state variables after defining it with a syntax 

// function App() {
  // const [count , setCount] = useState(0);
 
  // return (
  //   <>
  //     <div>
  //       <CustomButton count = {count} setCount={setCount}></CustomButton>
  //     </div>
  //   </>
  // )

  // function CustomButton(props){
  //   function countHandler(){
  //     props.setCount(props.count+1);
  //   }
  //   return(
  //     <button onClick={countHandler}> hi there {props.count}</button>
  //   )
  // }

 
 //-------------------------------------------------TODO USING MANUAL PASSING ------------------------------->
 
 
 
 
  // function App() {
  //   const [todo, setTodo] = useState([
  //     {
  //       id: 1,
  //       text: "todo1",
  //       description: "go to gym",
  //       status: false, // Changed from "false" (string) to false (boolean)
  //     },
  //     {
  //       id: 2,
  //       text: "todo2",
  //       description: "do dsa",
  //       status: true, // Changed from "true" (string) to true (boolean)
  //     },
  //   ]);
  
  //   return (
  //     <>
  //       <Todoset todo={todo}  />
  //     </>
  //   );
  // }
  
  // function Todoset(props) {
  //   return (
  //     <>
  //           <div>{props.todo[0].id}</div>
  //           <div>{props.todo[0].text}</div>
  //           <div>{props.todo[0].description}</div>
  //           <hr />
  //           <div>{props.todo[1].id}</div>
  //           <div>{props.todo[1].text}</div>
  //           <div>{props.todo[1].description}</div>
  //           <hr />
  //     </>
  //   );
  // }
  
  // export default App;

  function App() {
    const [todo, setTodo] = useState([
      {
        id: 1,
        text: "todo1",
        description: "go to gym",
        status: false,
      },
      {
        id: 2,
        text: "todo2",
        description: "do dsa",
        status: true,
      },
    ]);
  
    const [count, setCount] = useState(3);
  
    return (
      <div> {/* ✅ Added a wrapper div */}
        <AddNewTodo setTodo={setTodo} count={count} setCount={setCount} />
        {todo.map((todos) => (
          <TodoHandler
            key={todos.id}
            id={todos.id}
            text={todos.text}
            description={todos.description}
          />
        ))}
      </div>
    );
  }
  
  function TodoHandler(props) {
    return (
      <>
        <div>{props.id}</div>
        <div>{props.text}</div>
        <div>{props.description}</div>
      </>
    );
  }
  
  function AddNewTodo(props) { // ✅ Fixed function name
    function updateCnt() {
      props.setCount(props.count + 1);
    }
  
    function adding() {
      props.setTodo((prevTodos) => [
        ...prevTodos,
        {
          id: props.count,
          text: `todo${props.count}`,
          description: "New task",
        },
      ]);
    }
  
    return (
      <button
        onClick={() => {
          updateCnt();
          adding();
        }}
      >
        Click to add a new todo
      </button>
    );
  }
  
  export default App;
  