import React from "react";

function HvtFuncComp(props) {
  return (
    <div>
      <h2>Function Component</h2>
      <p>Xin chào: {props.name}</p>
      <p>Tuổi: {props.age}</p>
    </div>
  );
}

export default HvtFuncComp;
