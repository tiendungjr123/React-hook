import React, { useReducer } from 'react'

const reducers = (state,action) =>{
  switch(action){
    case 'TANG':
      return state+1;
    case 'GIAM':
      return state-1;
    case 'XOA_HET':
      return 0;
    default:
      return state;
  }
}

export default function ExUseReducer() {
  const [count, dispatch] = useReducer(reducers,0)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>dispatch('TANG')}>TANG</button>
      <button onClick={()=>dispatch('GIAM')}>GIAM</button>
      <button onClick={()=>dispatch('XOA_HET')}>XOA_HET</button>
    </div>
  )
  
}


/*
  ACTION: 'ADD_NEW_BUTTON'

  VIEW: Nhấn lên 1 button có dispatch('ADD_NEW_BUTTON')

  REDUCERS: (state, action) =>{
    switch(action):
      case 'ADD_NEW_BUTTON':
        return state+1
      case 'ABC':
        return abc
      default:
        return state
  }

*/