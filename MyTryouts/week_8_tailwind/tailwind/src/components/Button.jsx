import React from 'react'

export const Button = ({
  disabled,
  children,
  Onclick
}) => {
  return (
   <>
    <span
      onClick={Onclick}
      className={` text-2xl justify-center text-white px-40 py-8 rounded-2xl cursor-pointer ${disabled ? "bg-green-500" : "bg-blue-200"}`}
    >
      {children}
    </span>
   </>
  )
}

export default Button
