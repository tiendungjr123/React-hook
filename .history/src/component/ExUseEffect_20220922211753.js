/* ví dụ về side Effects
- Thực hiện gọi API
- thêm xóa các event listener (click, scroll)
- thao tác Dom trực tiếp
- gọi web APi( setTimeout, setInterval,..)
*/

import React from 'react'
import {useState, useEffect} from 'react'

export default function ExUseEffect() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick ={()=> setCount(count+1)} >Click Me</button>
    </div>
  )
}
