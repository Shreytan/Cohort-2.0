import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [render,setRender] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setRender(!render);
    }, 5000);
  },[render]);

  return (
    <>
      {render ? <Mycomponent/> : <div></div>}
    </>
  );

  function Mycomponent() {
    useEffect(
      () => {
        console.log('Mycomponent mounted');
        return () => {
          console.log('unmonted now');
        }
      }
      , []);
      return(
        <>
        hello from component
        </>
      )
  }
}

export default App
