import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "hello there Rajesh, Go to gym boiiii",
    },
    {
      id: 2,
      title: "go to gym",
      description: "hello there Suresh, Go to gym boiiii",
    },
    {
      id: 3,
      title: "go to gym",
      description: "hello there Mahesh, Go to gym boiiii",
    },
  ]);

  function AddTodo() {
    setTodo([...todo, {
      id: todo.length + 1,
      title: "New Todo",
      description: "Random Description",
    }]);
  }

  return (
    <>
      <button onClick={AddTodo}>Click to add another todo</button>
      {todo.map((res) => (
        <Todo key={res.id} title={res.title} description={res.description} />
      ))}
    </>
  );
}

function Todo(props) {
  return (
    <>
      <div>
        <h1>{props.title}</h1>
      </div>
      <div>
        <h4>{props.description}</h4>
      </div>
    </>
  );
}

export default App;
