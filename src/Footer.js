import React from 'react'

const Footer = ({length}) => {
  const today = new Date();
  return (
    <div>{length} list {length===1 ? "item" : "items"} </div>
  )
}

export default Footer