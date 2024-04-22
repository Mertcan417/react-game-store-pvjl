export default function SearchResults({
  results,
  setSelectedGame,
  setGameSearchHistory,
}) {
  // Ensure that handleSearchResults is correctly bound
  const handleSearchResults = (result) => {
    setSelectedGame(result);
    setGameSearchHistory((prevHistory) => [...prevHistory, result]);
  };

  return (
    <ul className="search-results">
      {results.map((result) => (
        <li
          key={result.name}
          className="search-result"
          onClick={() => handleSearchResults(result)} // Pass the result to handleSearchResults directly
        >
          {result.name}
        </li>
      ))}
    </ul>
  );
}
