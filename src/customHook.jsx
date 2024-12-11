// Filename - src/components/FirstComponent.js

import React, { useState, useEffect } from "react";

function FirstComponent(props) {
  const [counter, setCounter] = useState();

  // Increases the value of counter by 1
  function resetCounter() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    // Some logic
    console.log(counter);
  }, [counter]);

  const clickedButton = resetCounter;

  return (
    <div>
      <h2> This is the First Component Custom hook(check in console)</h2>
      <button onClick={clickedButton}>Click here!</button>
    </div>
  );
}

export default FirstComponent;
