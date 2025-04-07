import React from 'react'

export const Input = ({
  type,
  placeholder
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-[#1f2a44] text-blue-400 text-opacity-70 px-4 py-2 rounded-full outline-none"
      />
    </>
  )
}

export default Input
