import React from 'react'

import {useState} from 'react'
export default function ExUseState() {

  const [count, setCount]= useState(0)
  return (
    <div>
      <p>{count}</p>
    </div>
  )
}
