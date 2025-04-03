import { useMemo } from "react";
import { useState } from "react";

function App() {
  // --------------------------without using memo ----------------------------------------------





  // const [counter, setCounter] = useState(0);
  // const [inputValue, setInputValue] = useState(1);


  // let count = 0;
  // for (let i = 1; i <= inputValue; i++) {
  //   count = count + i;
  // }

  // return <div>
  //   <input onChange={function(e) {
  //     setInputValue(e.target.value);
  //   }} placeholder={"Find sum from 1 to n"}></input>
  //   <br />
  //   Sum from 1 to {inputValue} is {count}
  //   <br />
  //   <button onClick={() => {
  //     setCounter(counter + 1);
  //   }}>Counter ({counter})</button>
  // </div>









  // -------------------------------------using useeffect--------------------------------------
 
 
  //now if u use useeffect u'll use one extrs state variable and keep track of it hence time consuming





//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);
//   const [sum, setSum] = useState(0); // State to store the calculated sum

//   // useEffect to recalculate sum whenever inputValue changes
//   useEffect(() => {
//     let count = 0;
//     for (let i = 1; i <= inputValue; i++) {
//       count += i;
//     }
//     setSum(count);
//   }, [inputValue]); // Runs whenever inputValue changes

//   return (
//     <div>
//       <input
//         type="number"
//         onChange={(e) => setInputValue(Number(e.target.value))} // Convert input to number
//         placeholder="Find sum from 1 to n"
//       />
//       <br />
//       Sum from 1 to {inputValue} is {sum}
//       <br />
//       <button onClick={() => setCounter(counter + 1)}>
//         Counter ({counter})
//       </button>
//     </div>
//   );
// }



// --------------------------------------------using use memo ---------------------------------
  
// useeffect introduces and  extra state variable ; use memo just computes on the fly and returns the value computed
// so use memo is faster than useeffect
// use memo is used when u need to compute something on the fly and return the value computed


const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  let count = useMemo(() => {
    let count = 0;
    for (let i = 1; i <= inputValue; i++) {
      count += i;
    }
    return count;
  }, [inputValue]); // Runs whenever inputValue changes

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setInputValue(Number(e.target.value))} // Convert input to number
        placeholder="Find sum from 1 to n"
      />
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;