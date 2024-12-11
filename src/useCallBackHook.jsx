import React, { useState, useEffect, useMemo, useCallback } from "react";

function DataList3() {
  // Declare state variables for the data, loading, error, and search query
  const [data, setData] = useState([]); // To store fetched data
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track error state
  const [searchQuery, setSearchQuery] = useState(""); // For filtering data

  // useEffect to fetch data when the component mounts
  useEffect(() => {
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

  // useMemo hook to filter the data based on the search query
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data, searchQuery]); // Recompute when "data" or "searchQuery" changes

  // useCallback to memoize the function that handles the search input change
  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value); // Update search query state
  }, []); // The function does not depend on any state, so it does not need to be recreated

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data List with useCallback hook</h1>

      {/* Search input to filter the data */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearchChange} // Use the memoized callback function
      />

      <ul>
        {/* Map through the filtered data and render each item */}
        {filteredData.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>Email: {item.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataList3;
