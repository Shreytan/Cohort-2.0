import React from 'react'
import Button from './components/Button.jsx'
import Input from './components/Input.jsx'
import Otp from './components/Otp.jsx'

const App = () => {
  return (
    <>
      <div className='h-screen bg-blue-700'><br /><br /><br />
        <Input type={"text"} placeholder={"write ur username"} ></Input>
        <Button disabled={true}> Signup</Button>
        <br /><br /><br /><br /><br />
        <Otp />
         </div>
    </>
  )
}

export default App
