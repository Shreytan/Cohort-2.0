//ROUTING IN REACT---------------------------------------------------------------------

// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import React, { lazy, Suspense } from "react";
// import { useContext, useState } from "react";
// import "./App.css";
// import { CountContext } from "./context";

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




// ----------------------CONTEXT APIS-----------------------
// function App() {
//   const [count, setCount] = useState(0);
  
//   return (
//     <div>
//       <CountContext.Provider value={{ count, setCount }}>
//         <Count />
//       </CountContext.Provider>
//     </div>
//   );
// }

// function Count() {
//   return (
//     <div>
//       <CountRenderer />
//       <Buttons />
//     </div>
//   );
// }

// function CountRenderer() {
//   const { count } = useContext(CountContext);
//   return <div>{count}</div>;
// }
 
// function Buttons() {
//   const { count, setCount } = useContext(CountContext);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </div>
//   );
// }

// export default App;







// -----------------------------RECOIL----------------

// import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// import { countAtom } from "./store/atoms/count";
// import { useMemo } from "react";

// function App() {
//   return (
//     <div>
//       <RecoilRoot>
//         <Count />
//       </RecoilRoot>
//     </div>
//   );
// }

// function Count() {
//   console.log("re-render");
//   return (
//     <div>
//       <CountRenderer />
//       <Buttons />
//     </div>
//   );
// }

// function CountRenderer() {
//   const count = useRecoilValue(countAtom);

//   return (
//       <>
//     <div>
//       <b>{count}</b>
//     </div>
//     <CountEven />
//     </>
//   );
// }
// function CountEven(){
//   console.log("check");
//     const count = useRecoilValue(countAtom);
//      const check = useMemo(()=>{
//       if(count % 2 == 0){
//         return(
//           <>
//           Even hu bro
//           </>
//         )
//       }
//       else{
//         return(<>
//         Odd hu bro
//         </>)
//       }
//     },[count])
//     return (
//       <div>
//         {check}
//       </div>
//     )
// }

// function Buttons() {
//   const  setCount = useSetRecoilState(countAtom); // Destructure here
//   console.log("buttons re-rendered");

//   return (
//     <div>
//       <button onClick={() => setCount(count => count + 1)}>Increase</button>
//       <button onClick={() => setCount(count => count - 1)}>Decrease</button>
//     </div>
//   );
// }

// export default App;


// -----------------------------USING GET -------------------------------------

import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom , check } from "./store/atoms/count";

import { useMemo } from "react";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("re-render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return (
    <>
      <div>
        <b>{count}</b>
      </div>
      <CountEven />
    </>
  );
}

function CountEven() {
  console.log("check");
  const isEven = useRecoilValue(check); // Use `check` here properly

  return (
    <div>
      {isEven ? "Even" : null} {/* Render "Even" if `check` is truthy */}
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom); // Destructure here
  console.log("buttons re-rendered");

  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Increase</button>
      <button onClick={() => setCount(count => count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
