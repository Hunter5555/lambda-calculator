import React from "react";

const NumberButton = (props) => {
    console.log(props)
  return (
    <button>
      {props.numbers}
    </button>
  );
};

export default NumberButton;
