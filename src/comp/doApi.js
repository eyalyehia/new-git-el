import React, { useState } from 'react'
import { AddTask } from './addTask'
import { InputTask } from './inputTask'
import {sortBy} from "lodash"

export const DoApi = () => {
let [temp_ar,SetTemp_ar] = useState([]);

const taskAdd = (_itemTask) => {
  let sort_ar = [...temp_ar,_itemTask]
  sort_ar = sortBy(sort_ar,"time")
  SetTemp_ar(sort_ar)

}

const removeTemp = () => {
  SetTemp_ar([])
}

const removeTask = (_id) => {
  let task_ar = temp_ar.filter(item => item.id != _id)
  SetTemp_ar(task_ar)
}

  return (
    <div>
        <InputTask taskAdd ={taskAdd}  removeTemp = {removeTemp}/>
        <h3 className='mx-auto w-25'>Task you added:</h3>
        <AddTask temp_ar = {temp_ar} removeTask = {removeTask}/>
    </div>
  )
}
