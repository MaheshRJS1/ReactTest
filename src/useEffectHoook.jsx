import React, { useState, useEffect } from "react";

function DataList() {
  // Declare state variables for the data and loading state
  const [data, setData] = useState([]); // To store fetched data
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track error state

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Simulating data fetch from an API (using setTimeout here for illustration)
    fetch("https://jsonplaceholder.typicode.com/users") // Example API
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Set fetched data to state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError(error.message); // If error occurs, set error state
        setLoading(false); // Stop loading
      });
  }, []); // Empty dependency array means it runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {/* Map through the data array and render each item */}
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>Email: {item.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
