import React from 'react'

export const InputTask = () => {
  return (
    <div className='container'>
        <h5 className='mx-auto w-25'>Enter task name:</h5>
        <input className='form-control w-25 mx-auto '/>
        <h5 className='w-25 mx-auto'>Enter task time:</h5>
        <input placeholder="09:00" type="time" className='form-control w-25 mx-auto'/>
        <div className='container mx-auto w-25 mt-2'>
            <button className='btn btn-success w-15 mx-2'>Add</button>
            <button className='btn btn-danger w-15'>Reset</button>
        </div>
    </div>
  )
}
