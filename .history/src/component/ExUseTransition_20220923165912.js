import React from "react";

export default function ExUseTransition({ data }) {
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
