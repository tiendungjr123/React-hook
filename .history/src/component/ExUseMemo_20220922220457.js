import React from 'react'
import {useState,useMemo} from 'react'

function expensiveFunction(numbers){
  console.log('Bat dau');

  const start = new Date();
  while((new Date() -start) <3000);
  
  console.log('Ket thuc', new Date() - start,'ms');

  return numbers*numbers;
}

export default function ExUseMemo() {

  const [count,setCount] = useState(0);
  const numbers = useMemo(()=>{
    return expensiveFunction(10);
  },[])
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count+1)}>Add</button>

      <p>Number: {numbers}</p>
    </div>
  )
}
