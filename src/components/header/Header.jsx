import { useEffect, useState } from "react";
import SearchResults from "../searchedresults/SearchResults.jsx";
import Darkmode from "../darkmode/Darkmode.jsx";
import Logo from "../logo/Logo.jsx";
import Searchbar from "../searchbar/Searchbar.jsx";
import "./Header.css";
import SearchIcon from "../searchicon/SearchIcon.jsx";

export default function Header({
  setSelectedGame,
  setGameSearchHistory
}) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [localGames, setLocalGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        const data = await response.json();
        setLocalGames(data.cards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const fetchDataLocal = (value) => {
    const filteredGames = localGames
      .filter(
        (game) =>
          value &&
          game.name.toString().toLowerCase().includes(value.toLowerCase())
      )
      .splice(0, 8);

    setResults(filteredGames);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchDataLocal(value);
  };

  return (
    <div className="header-component">
      <div className="header">
        <div className="logo-container">
          <Logo
            imageUrl={"logo192.png"}
            description="website logo"
            width={40}
            height={40}
          />
        </div>

        <div className="searchbar-container">
          <SearchIcon />
          <Searchbar
            onSearch={(e) => {
              handleChange(e.target.value);
            }}
            value={input}
          />
        </div>
        <div className="darkmode-container">
          <Darkmode>Darkmode</Darkmode>
        </div>
      </div>

      <div className="search-results-container">
        <div className="spacer-1"></div>
        <SearchResults
          results={results}
          setSelectedGame={setSelectedGame}
          setGameSearchHistory={setGameSearchHistory}
        />
        <div className="spacer-2"></div>
      </div>
    </div>
  );
}
