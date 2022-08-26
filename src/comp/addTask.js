import React from 'react'
import { ItemTask } from './itemTask'

export const AddTask = (props) => {
  return (
    
    <div className='container shadow text-center w-25 overflow-hidden'>
         
      { props.temp_ar.map(item => {
         return(
          <ItemTask removeTask = {props.removeTask} task_ar item ={item} key ={item.id} />
         )
      })}

        
    </div>
  )
}
