import React, { useId, useMemo, useState, useTransition } from "react";
import Form from "../Form";
import StudentListData from "./mocks/StudentList.json";

export default function ExUseTransition() {
  
  const id = useId();
  const [searchInput, setSearchInput] = useState("");
  const [filterText, setFilterText] = useState("");

  const [isPending, startTransition] = useTransition();
  const data = useMemo(() => {
    return StudentListData.map((student) => {
      const index = student.indexOf(filterText);
      return index === -1 ? (
        <p>{student}</p>
      ) : (
        <p>
          {student.slice(0, index)}{" "}
          <span style={{ backgroundColor: "yellow" }}>
            {student.slice(index, index + filterText.length)}
          </span>
          {student.slice(index + filterText.length)}
        </p>
      );
    });
  }, [filterText]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    startTransition(() => {
      setFilterText(e.target.value);
    });
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
      {isPending ? <p>Loading...</p> : <Form data={data} />}
    </div>
  );
}
