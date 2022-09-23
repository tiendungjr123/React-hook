import React, { useId, useState } from "react";
import ExUseTransition from "./component/ExUseTransition";
import StudentListData from "./mocks/StudentList.json";
export default function Form() {
  const id = useId();
  const data = StudentListData;
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div>
      <h3>Form</h3>
      <label htmlFor={id}>Search Name</label>
      <input
        type="text"
        name="name"
        id={id}
        onChange={handleInputChange}
        value={searchInput}
      />
      <ExUseTransition data={data} />
    </div>
  );
}
