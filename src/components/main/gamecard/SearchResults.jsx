export default function SearchResults({
  results,
  setSelectedGame,
  setGameSearchHistory,
}) {
  return (
    <ul className="search-results">
      {results.map((result) => (
        <li
          className="search-result"
          onClick={() => {
            setSelectedGame(result);
            setGameSearchHistory((prevHistory) => [...prevHistory, result]);
          }}
        >
          {result.name}
        </li>
      ))}
    </ul>
  );
}
