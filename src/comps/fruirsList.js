import React from 'react';
import FruitItem from './fruitItem';
import {useSelector} from 'react-redux'

function FruitsList(props){
  return(
    <div className="col-lg-6 mx-auto">
      {props.fruits_ar.map(item => {
        return (
          <FruitItem  key={item} name={item} />
        )
      })}
    </div> 
  )
}

export default FruitsList