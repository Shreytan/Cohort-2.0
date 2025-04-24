import { useState, useEffect } from 'react';
import './App.css';

// Create an app that polls the sum server 
// Gets the current set of TODOs 
// Renders it on screen 
// https://sum-server.100xdevs.com/todos

function App() {
  const [todos, setTodos] = useState([]);
  const url = "https://sum-server.100xdevs.com/todos";

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch(url)
        .then(async (res) => {
          const json = await res.json();
          setTodos(json.todos);
        })
        .catch((error) => console.error("Error fetching todos:", error));
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup function to avoid memory leaks
  }, []);

  return (
    <>
      {todos.map((todo, index) => (
        <Display key={index} title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

function Display(props) {
  return (
    <div style={{ border: "1px solid white", padding: "10px", marginBottom: "10px" }}>
      <strong>{props.title}</strong> <br />
      {props.description}
    </div>
  );
}

export default App;
