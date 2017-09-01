import React from 'react'

const Button = ({ func, value }) => {
  return (
    <button
      className="btn"
      onClick={ ()=>func(value) }
    >
      { value }
    </button>
  )
}

export default Button
