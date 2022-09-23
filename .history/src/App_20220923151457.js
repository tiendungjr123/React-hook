import React, { useState, useCallback, useEffect } from "react";
import ExUseState from "./component/ExUseState";
import ExUseEffect from "./component/ExUseEffect";
import ExUseMemo from "./component/ExUseMemo";
import ExUseCallback from "./component/ExUseCallback";
import ExUseRef from "./component/ExUseRef";
import ExUseReducer from "./component/ExUseReducer";

function App() {
  return (
    <>
      <ExUseReducer/>
    </>
  );
}

export default App;
