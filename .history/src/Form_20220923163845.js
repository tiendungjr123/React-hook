import React, { useId } from 'react'
import ExUseTransition from './component/ExUseTransition'
import StudentListData from './mocks/StudentList.json'
export default function Form() {

  const id = useId()
  const data = StudentListData
  return (
    <div>
      <h3>Form</h3>
      <label htmlFor={id}>Search Name</label>
      <input type="text" name='name' id={id}/>
      <ExUseTransition data={data}/>
    </div>
  )
}
