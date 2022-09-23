import React from 'react'

import {useState} from 'react'
export default function ExUseState() {

  const [count, setCount]= useState(0)
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
