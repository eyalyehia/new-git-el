import React from 'react'
import { AddTask } from './addTask'
import { InputTask } from './inputTask'

export const DoApi = () => {
  return (
    <div>
        <InputTask/>
        <h3 className='mx-auto w-25'>Task you added:</h3>
        <AddTask/>
    </div>
  )
}
