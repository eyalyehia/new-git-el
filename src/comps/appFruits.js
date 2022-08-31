import React, { useState } from 'react';
import FruitsList from './fruirsList';
import {createStore} from 'redux';
import {Provider} from 'react-redux' ;
import {myReducer} from '../reducers/red'



function AppFruits(props){
  let [fruits_ar,setFruitsAr] = useState(["mango","apple","kiwi"])

let myStore = createStore(myReducer)

  // let [chooseFruit, setFruitChoose] = useState("");

  return(
    <Provider store={myStore}>
    <div className="container">
      <h1>Fruits list</h1>
      <h2>Choosen Fruit: </h2>
      <FruitsList fruits_ar={fruits_ar} />

    </div> 
    </Provider>
  )
}

export default AppFruits