import React from 'react'

export const ItemTask = (props) => {
    let {name,time,id} = props.item;
  return (
    <div className='shadow my-2 p-2'>
      <button onClick={() => {
        props.removeTask(id)
      }} className='btn btn-danger float-sm-end'>X</button>
        <h4><i>{name} - {time}</i></h4>
    </div>
  )
}

