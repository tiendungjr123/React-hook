import React, { useId } from "react";

export default function ExUseTransition({ data }) {
  const id = useId();
  return (
    <>
      <div>Student List:</div>
      <div>
        {data.map((student, key={id}) => (
          <p>{student}</p>
        ))}
      </div>
    </>
  );
}
