import React, { useId, useMemo, useState } from "react";
import ExUseTransition from "./component/ExUseTransition";
import StudentListData from "./mocks/StudentList.json";
export default function Form() {
  const id = useId();
  const [searchInput, setSearchInput] = useState("");
  const data = useMemo(() => {
    return StudentListData.map((student) => {
      const index = student.indexOf(searchInput);
      return index === -1 ? (
        <p>{student}</p>
      ) : (
        <p>
          {student.slice(0, index)}{" "}
          <span style={{ backgroundColor: "yellow" }}>
            {student.slice(index, index + searchInput.length)}
          </span>
          {student.slice(index+searchInput.length)}
        </p>
      );
    });
  }, [searchInput]);

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
