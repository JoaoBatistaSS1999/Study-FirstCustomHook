import React from "react";

import Card from "./Card";
import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {
  const counter = useCounter(false, 7, 9);

  return (
    <React.Fragment>
      <Card>
        {counter}
        <p>Subtracts, initial number is 7 and it decrements by 9</p>
      </Card>
    </React.Fragment>
  );
};

export default BackwardCounter;
