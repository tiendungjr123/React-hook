import React from 'react'

import {useState} from 'react'
export default function ExUseState() {

  const sum = () =>{
    let total = 0;
    for(let i =0; i<10;i++){
      total+=i;
    }
    return total;
  }

  const [count, setCount]= useState(()=>{
    return sum();
  })
  const handleClick = () =>{
    setCount(count+1);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}
