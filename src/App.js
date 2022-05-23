import React from "react";
import BackwardCounter from "./components/BackwardCounter";
import Card from "./components/Card";
import ForwardCounter from "./components/ForwardCounter";
import Image from "./assets/CustomHooks.png";

function App() {
  return (
    <React.Fragment>
      <h1>First contact with custom hooks</h1>
      <ForwardCounter />
      <BackwardCounter />
      <Card>
        <img src={Image} alt='code-snipet' />
      </Card>
    </React.Fragment>
  );
}

export default App;
