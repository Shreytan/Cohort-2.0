
import './App.css'

function App() {

  return (
    <>
    <Todo todo = "Go to gym" description='go gym build physique' done = {true} ></Todo>
    </>
  )
}

interface Todos {
  todo : string,
  description : string ,
  done : boolean
}

function Todo(props:Todos){
    return(
      <>
      <h1>{props.todo}</h1>
      <h2>{props.description}</h2>
      <h3>{props.done}</h3>
      </>
    )
}

export default App
