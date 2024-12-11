import React from "react";
import { useState } from "react";

function Mahi2(props) {
  const [userName, setUserName] = useState("from Ayodya");
  return (
    <div>
      <h1>
        Hi this is functional compo {props.name}, i'm sriram's {props.relation},
        {userName}
      </h1>
      <button onClick={() => setUserName("sitarama")}>Click-SetState</button>
    </div>
  );
}

export default Mahi2;
