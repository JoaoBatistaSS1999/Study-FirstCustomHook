import React from "react";

import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter(true, 4, 5);
  return (
    <React.Fragment>
      <Card>
        {counter}
        <p>Adds, initial number is 4 and it increments by 5</p>
      </Card>
    </React.Fragment>
  );
};

export default ForwardCounter;
