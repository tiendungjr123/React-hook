/* ví dụ về side Effects
- Thực hiện gọi API
- thêm xóa các event listener (click, scroll)
- thao tác Dom trực tiếp
- gọi web APi( setTimeout, setInterval,..)
*/

import React from "react";
import { useState, useEffect } from "react";

export default function ExUseEffect() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("");
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    // ComponentDidMount & componentDidUpdate
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    fetch(`https://reqres.in/api/${action}`)
      .then((res) => console.log({ res }))
      .catch((error) => console.log(error));
  }, [action]);

  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    // componentDidMount
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "2000px" }}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>

      <button onClick={() => setAction("users")}>Get Users</button>
      <button onClick={() => setAction("comments")}>Get Comments</button>

      <p style={{ position: "fixed", bottom: "20px", left: "20px" }}>
        {scrollPos}
      </p>
    </div>
  );
}
