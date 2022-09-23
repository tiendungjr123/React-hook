import React from 'react'
import { useRef, useState } from 'react';
export default function ExUseRef() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0)
  
  const handleClick = () =>{
    setCount(count+1);
    countRef.current = countRef.current+1;
  }

  console.log({count,countRef});
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

// lưu trữ đc 1 tham chiếu
// thao tác với phần tử DOM
