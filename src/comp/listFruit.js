import React from 'react'

export const ListFruit = (props) => {
  return (
    <div className='container'>
      
     {props.fruit.map((item,index) => {
        return (
         <ul key={index}>
        <li>{item}</li>
        </ul>
        )})
     }  
       
      

    </div>
    
  )
}
