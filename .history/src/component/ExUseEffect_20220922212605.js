/* ví dụ về side Effects
- Thực hiện gọi API
- thêm xóa các event listener (click, scroll)
- thao tác Dom trực tiếp
- gọi web APi( setTimeout, setInterval,..)
*/

import React from 'react'
import {useState, useEffect} from 'react'

export default function ExUseEffect() {
  const [count, setCount] = useState(0);
  const [action,setAction] =  useState('');

  useEffect(() =>{
    // ComponentDidMount & componentDidUpdate
    document.title = `You clicked ${count} times`;
    console.log('UseEffect');
  },[count,action])
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick ={()=> setCount(count+1)} >Click Me</button>

      <button onClick={()=>setAction('users')}>Get Users</button>
      <button onClick={()=>setAction('comments')}>Get Comments</button>
    </div>
  )
}
