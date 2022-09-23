import React from "react";
import { useRef, useState, useEffect } from "react";
export default function ExUseRef() {
  const countRef = useRef(0);
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    countRef.current = countRef.current + 1;
  };

  // useEffect(() => {
  //   setInterval(()=>{
  //     countRef.current = countRef.current+1;
  //     console.log({countRef: countRef.current})
  //   },1000)
  // }, []);

  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Click Me</button>
      <input type="text" ref={ref} />
    </div>
  );
}

// lưu trữ đc 1 tham chiếu
// khác với useState thì useRef không làm cho appComponent bị re-render khi tham chiếu bị thay đổi
// truy vấn đến phần tử DOM
