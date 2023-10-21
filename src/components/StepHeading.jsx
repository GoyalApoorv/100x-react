import React from "react";

function StepHeading(props) {
  return (
    <h1 className="text-2xl font-bold leading-normal text-neutral-50">
     {props.text}
    </h1>
  );
}

export default StepHeading;
