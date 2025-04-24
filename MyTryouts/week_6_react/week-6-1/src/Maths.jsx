import { useState } from "react";

function Maths() {
  const [name, setName] = useState("shreyansh");

  function Change() {
    const a = Math.random().toFixed(2); // Generates a random number and limits it to 2 decimal places
    setName(a); // Updates state instead of modifying props
  }

  return (
    <div>
      <button onClick={Change}>Click here to change the name</button>
      <div>My name is {name}</div>
    </div>
  );
}

export default Maths;
