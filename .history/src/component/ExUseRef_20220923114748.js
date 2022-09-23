import React from "react";
import { useRef, useState, useEffect } from "react";
export default function ExUseRef() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    countRef.current = countRef.current + 1;
  };

  useEffect(() => {
    setInterval(()=>{
      setCount(count+1)
      console.log({count})
    },1000)
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// lưu trữ đc 1 tham chiếu
// khác với useState thì useRef không làm cho appComponent bị re-render khi tham chiếu bị thay đổi
// thao tác với phần tử DOM
