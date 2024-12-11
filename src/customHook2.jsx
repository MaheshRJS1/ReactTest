// Filename - Second Component

import React from "react";

// Importing the custom hook
import useCustomHook from "./useCustomHook";

function SecondComponent(props) {
  // ClickedButton = resetCounter;
  const clickedButton = useCustomHook(0, "SecondComponent");

  return (
    <div>
      <h1> This is the Second Component Custom hook(check in console)</h1>
      <button onClick={clickedButton}>Click here!</button>
    </div>
  );
}

export default SecondComponent;
