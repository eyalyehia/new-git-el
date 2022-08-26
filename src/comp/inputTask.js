import React, { useRef } from 'react'

export const InputTask = (props) => {
let nameTask = useRef();
let timeTask = useRef();

const addTaskToTheList = () =>{
let add_ar = {
 name: nameTask.current.value,
 time: timeTask.current.value,
  id: Date.now()
}
props.taskAdd(add_ar)
console.log(add_ar )
  
 
}


  return (
    <div className='container'>
        <h5 className='mx-auto w-25'>Enter task name:</h5>
        <input ref={nameTask} className='form-control w-25 mx-auto '/>
        <h5 className='w-25 mx-auto'>Enter task time:</h5>
        <input ref={timeTask} placeholder="09:00" type="time" className='form-control w-25 mx-auto'/>
        <div className='container mx-auto w-25 mt-2'>
            <button onClick={addTaskToTheList} className='btn btn-success w-15 mx-2'>Add</button>
            <button onClick={() => {props.removeTemp()}} className='btn btn-danger w-15'>Reset</button>
        </div>
    </div>
  )
}
