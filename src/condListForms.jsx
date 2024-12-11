import React, { useState } from "react";

// VotingEligibility Component
function VotingEligibility() {
  const age = 20;
  if (age >= 18) {
    return <h1>you are eligible for vote</h1>;
  } else {
    return <h1>you are not eligible for vote</h1>;
  }
}

// ListItems Component
function ListItems() {
  const employees = [
    { id: 1, name: "Ram", age: 21 },
    { id: 1, name: "Ram", age: 21 },
    { id: 1, name: "Ram", age: 21 },
  ];

  return (
    <div>
      {employees.map((person) => (
        <div key={person.id}>
          <p>{person.id}</p>
          <p>{person.name}</p>
          <p>{person.age}</p>
        </div>
      ))}
    </div>
  );
}
// MyForm Component
function MyForm() {
  // Step 1: Define state for form inputs and submission result
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Step 2: Handle the input changes
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Step 3: Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form behavior (page refresh)

    // Validation logic (you can customize this)
    if (name && email) {
      setMessage(`Thank you, ${name}! We have received your email: ${email}.`);
    } else {
      setMessage("Please provide both name and email.");
    }
  };

  return (
    <div>
      <h1>Contact Form</h1>

      {/* Step 4: Create the form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange} // Update name state on input change
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange} // Update email state on input change
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Step 5: Display submission result */}
      {message && <h2>{message}</h2>}
    </div>
  );
}

export { VotingEligibility, ListItems, MyForm };
