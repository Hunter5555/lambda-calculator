import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton"

//import any components needed

//Import your array data to from the provided data file
export default function Operators() {
  const [ops] = useState(operators)
  // STEP 2 - add the imported data to state
  return (
    <div>
      {ops.map((o, index) => 
        <OperatorButton key= {index} operators={o.char} />)}
    </div>
  );
};
