import React from 'react'
import { ItemTask } from './itemTask'

export const AddTask = (props) => {
  return (
    <div className='container-fluid'>
      <h3 className='text-light mx-auto w-50'><strong>Task you added:</strong></h3>
    <div className='text-light container shadow text-center mx-auto row gap-2 col-8 col-lg-4 col-sm-6 overflow-hidden'>
        
      { props.temp_ar.map(item => {
         return(
          <ItemTask removeTask = {props.removeTask} task_ar item ={item} key ={item.id} />
         )
      })}
      
    </div>
    </div>
  )
}
