import { useState } from 'react'
import './App.css'

function App() {
  return (
    <> 
      <CompWrapper text = {<Texxtrender/>} />
    </>
  )
}

function Texxtrender(){
  return <b>HEllo there my sakamoto skibbidi fat nutella</b>;
}

function CompWrapper(props){
  return (
    <div style={{ border: "2px solid white", padding: "10px" }}>
      {props.text}
    </div>
  );
}

export default App;
