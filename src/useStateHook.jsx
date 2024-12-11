import React, { useState } from "react";

function Counter() {
  // Declare a state variable "count" and its updater function "setCount"
  const [count, setCount] = useState(0); // Initial value of count is 0

  // Function to handle the increment action
  const increment = () => {
    setCount(count + 1); // Update the count state
  };

  // Function to handle the decrement action
  const decrement = () => {
    setCount(count - 1); // Update the count state
  };

  return (
    <div>
      <h1>Counter(with useStateHook): {count}</h1>{" "}
      {/* Display the current value of count */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
