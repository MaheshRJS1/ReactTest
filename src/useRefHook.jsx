import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";

function DataList4() {
  // Declare state variables for the data, loading, error, and search query
  const [data, setData] = useState([]); // To store fetched data
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track error state
  const [searchQuery, setSearchQuery] = useState(""); // For filtering data

  // useRef to store the previous value of searchQuery
  const prevSearchQueryRef = useRef("");

  // useEffect to focus the input field when the component mounts
  useEffect(() => {
    // Focus the search input on initial render
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Empty dependency array means it runs only once when component mounts

  // useEffect to update the previous search query after each render
  useEffect(() => {
    prevSearchQueryRef.current = searchQuery; // Store the current search query
  }, [searchQuery]); // Update the previous value whenever searchQuery changes

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

  // useRef to store a reference to the input element
  const inputRef = useRef(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data List with useRef hook</h1>

      {/* Display the previous search query */}
      <div>
        <strong>Previous Search Query: </strong>
        {prevSearchQueryRef.current}
      </div>

      {/* Search input to filter the data */}
      <input
        ref={inputRef} // Attach ref to the input field
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

export default DataList4;
