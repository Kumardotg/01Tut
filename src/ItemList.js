import React from 'react';
import LineItem from './LineItem';

const ItemList = ({items, handleChange, handleDelete}) => {
  return (
    <ul>
            {
            items.map((item)=>(
              
                <LineItem key={item.Id}  item={item} handleChange={handleChange} handleDelete={handleDelete} ></LineItem>
              
            ))
            }
        </ul> 
  )
}

export default ItemList