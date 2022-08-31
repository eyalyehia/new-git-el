import React, { useEffect, useState } from 'react'
import { Input } from './input'
import { ListFruit } from './listFruit'

export const Search = (props) => {

    const list = ['banana','apple','orange','pineapple','mango','waterMelon'];

    let [fruit,setFruit] = useState([])

    // const handleSearch = (event) => {

    //     if (event.target.value === "") {
    //       setFruit(list);
    //       return;
    //     }
    //     const filteredValues = list.filter(
    //       (item) =>
    //         item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    //     );
    //     setFruit(filteredValues);
    //   };

    const chooseFruit = (_val) => {
        setFruit(_val)
    }

     

  return (
    <div>
        <Input fruit = {fruit} chooseFruit = {chooseFruit} />

        
        {/* <ListFruit fruit = {fruit} handleSearch = {handleSearch}/> */}
    </div>
  )
} 
