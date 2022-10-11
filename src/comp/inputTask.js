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
        <h1 className='text-light mx-auto'>To Do List</h1>
        <h5 className='text-light mx-auto w-50'><strong>Enter task name:</strong></h5>
        <input ref={nameTask} className='form-control w-25 mx-auto'/>
        <h5 className='text-light w-lg-25 w-sm-50 mx-auto'><strong>Enter task time:</strong></h5>
        <input ref={timeTask} placeholder="09:00" type="time" className='form-control w-25 mx-auto'/>
        <div className='container mx-auto row col-3 gap-2 col-md-12 col-sm-3 gap-sm-2 justify-content-center mt-2'>
            <button onClick={addTaskToTheList} className='btn btn-success col-md-1 w-15  mx-2'>Add</button>
            <button onClick={() => {props.removeTemp()}} className='btn btn-danger col-md-1 w-15'>Reset</button>
        </div>
    </div>
  )
}
