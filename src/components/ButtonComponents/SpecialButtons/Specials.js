import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

export default function Specials() {
  const [spec] = useState(specials)
  return (
    <div>
      {spec.map((s, index) => 
        <SpecialButton key={index} specials={s} />
        )}
    </div>
  );
};

//import any components needed

//Import your array data to from the provided data file


  // STEP 2 - add the imported data to state

