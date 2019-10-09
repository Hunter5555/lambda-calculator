import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";


export default function Numbers() {
  const [nums] = useState(numbers)

  return (
    <>
      {nums.map((n, index) => 
        <NumberButton key={index} numbers={n} />
      )}
    </>

  );
};

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file


  // STEP 2 - add the imported data to state
 
      /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
