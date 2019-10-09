import React from "react";

const SpecialButton = (props) => {
    console.log(props)
  return (
    <button>
      {props.specials}
    </button>
  );
};

export default SpecialButton;
