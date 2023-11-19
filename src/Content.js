import React from 'react'
import ItemList from './ItemList'


const Content = ({items, handleChange, handleDelete}) => {
  
  return (
    <main>
        {items.length ?
      <ItemList items={items} handleChange={handleChange} handleDelete={handleDelete} ></ItemList>   :
    ( <p style={{marginTop:'2rem'}}>The list is empty</p>)
    
}
    </main>
  )
}

export default Content