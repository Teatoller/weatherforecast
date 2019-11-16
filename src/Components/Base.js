import React from "react";

function Base(props) {
  const data = props.base;

  return (
    <div>
      <h3>Base: {data}</h3>
    </div>
  );
}
export default Base;
