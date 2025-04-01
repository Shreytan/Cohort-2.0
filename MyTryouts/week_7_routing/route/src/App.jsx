//ROUTING IN REACT---------------------------------------------------------------------

// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import React, { lazy, Suspense } from "react";
import { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./context";

// const Dashboard = lazy(() => import("./components/Dashboard"));
// const Landing = lazy(() => import("./components/Landing"));

// function App() {
//   return (
//     <>
//       <div style={{ background: "black", color: "white" }}>THIS IS CONSTANT</div>

//       <BrowserRouter basename="/">
//         <Appbar />
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Landing />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </>
//   );
// }

// function Appbar() {
//   const navigate = useNavigate();
//   return (
//     <>
//       <button onClick={() => navigate("/")}>Landing page</button>
//       <button onClick={() => navigate("/dashboard")}>Dashboard page</button>
//     </>
//   );
// }



// function App(){
//   const [count,setcount] = useState(0);
//   return(
//     <>
//     <Count count = {count}/>
//     <Buttons count = {count} setcount={setcount} />

//     </>
//   )
// }

// function Count({count}){
//  return(
//   <>
//     {count}
//   </>
//  )
// }

// function Buttons(){
//   <>
//   <button onClick={()=>{
//     setcount(count+1);
//   }}>Increase</button>
//   <button onClick={()=>{
//       setcount(count-1);
//   }}>Decrease</button>
//   </>
// }


// export default App;


function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
