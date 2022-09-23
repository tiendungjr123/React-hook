import React from "react";
export default function Form({data}) {
  return (
    <>
      <div>Student List:</div>
      <div>
        {data.map((student) => (
          <p>{student}</p>
        ))}
      </div>
    </>
  );
}
