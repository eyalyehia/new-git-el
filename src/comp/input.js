import React, { useRef } from 'react'

export const Input = (props) => {
  
    let inputValue = useRef();

  return (
    <div className='container-fluid bg-info p-3'>
    <div className='container col-lg-6 d-flex'>
     <label className='form-label mx-3' style={{color: 'white', fontSize: '1.3em'}}>Search:</label>
     <input onChange={() => {props.chooseFruit(inputValue.current.value)}} className='form-control w-50' ref={inputValue} />
    </div>
    </div>
  )
}
