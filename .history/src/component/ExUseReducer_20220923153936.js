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

const reducers2 = (state, action) =>{
  switch(action.type){
    case 'GAN_GIA_TRI':
      return action.data;
    default:
      return state;
  }
}

export default function ExUseReducer() {
  const [count, dispatch] = useReducer(reducers,0)
  const [count2, dispatch2] = useReducer(reducers2,0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>dispatch('TANG')}>TANG</button>
      <button onClick={()=>dispatch('GIAM')}>GIAM</button>
      <button onClick={()=>dispatch('XOA_HET')}>XOA_HET</button>

      <p>Count2: {count2}</p>
      <button onClick={()=>dispatch2({
        type:'GAN_GIA_TRI',
        data:10
      })}>GAN GIA TRI</button>
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