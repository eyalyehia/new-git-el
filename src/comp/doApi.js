import React, { useState } from 'react'
import { AddTask } from './addTask'
import { InputTask } from './inputTask'
import {sortBy} from "lodash"
import { useEffect } from 'react'

export const DoApi = () => {
let [temp_ar,SetTemp_ar] = useState([]);


useEffect(() => {
  if(localStorage["task"]){
    SetTemp_ar(JSON.parse(localStorage["task"]))
  }
// localStorage["task"] ? SetTemp_ar(JSON.parse(localStorage["task"])): temp_ar;
},[])

const taskAdd = (_itemTask) => {
  let sort_ar = [...temp_ar,_itemTask]
  sort_ar = sortBy(sort_ar,"time")
  saveLocal(sort_ar)

}

const removeTemp = () => {
  saveLocal([])
}

const removeTask = (_id) => {
  let task_ar = temp_ar.filter(item => item.id != _id)
  saveLocal(task_ar)
}

const saveLocal = (_ar) => {
localStorage.setItem("task", JSON.stringify(_ar))
SetTemp_ar(_ar)
}

  return (
    <div className='mt-4'>
        <InputTask taskAdd ={taskAdd}  removeTemp = {removeTemp}/>
        <AddTask temp_ar = {temp_ar} removeTask = {removeTask}/>
    </div>
  )
}
