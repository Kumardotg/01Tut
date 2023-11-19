import React from 'react'
import {FaTrash } from 'react-icons/fa';

const LineItem = ({item, handleChange, handleDelete}) => {
  return (
    <li className='item' >
    <input type="checkbox" checked={item.Checked} onChange={() => handleChange(item.Id)} />
    <label 
    style={item.Checked ? {textDecoration:'line-through'}:null} 
    onDoubleClick={()=> handleChange(item.Id)}>{item.Name}</label>
   <FaTrash role="button" tabIndex="0" onClick={()=>handleDelete(item.Id)} />
   </li>
  )
}

export default LineItem