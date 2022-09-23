import React, { useId } from 'react'
import ExUseTransition from './component/ExUseTransition'

export default function Form() {

  const id = useId()
  return (
    <div>
      <h3>Form</h3>
      <label htmlFor={id}>Search Name</label>
      <input type="text" name='name' id={id}/>
      <ExUseTransition data={[]}/>
    </div>
  )
}
