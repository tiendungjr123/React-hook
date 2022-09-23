import React, { useState, useCallback, useEffect } from "react";
import ExUseState from "./component/ExUseState";
import ExUseEffect from "./component/ExUseEffect";
import ExUseMemo from "./component/ExUseMemo";
import ExUseCallback from "./component/ExUseCallback";
import ExUseRef from "./component/ExUseRef";

function App() {
  const [users, setUsers] = useState([]);
  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);

  const handleClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };
  return (
    <>
      <ExUseRef/>
    </>
  );
}

export default App;
