import React, { useState, useCallback, useEffect } from "react";
import ExUseState from "./component/ExUseState";
import ExUseEffect from "./component/ExUseEffect";
import ExUseMemo from "./component/ExUseMemo";
import ExUseCallback from "./component/ExUseCallback";
import ExUseRef from "./component/ExUseRef";
import ExUseReducer from "./component/ExUseReducer";
import ExUseTransition from "./component/ExUseTransition";

function App() {
  return (
    <>
      <ExUseTransition/>
    </>
  );
}

export default App;
