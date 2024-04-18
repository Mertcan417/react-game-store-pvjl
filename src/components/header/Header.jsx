import { useEffect, useState } from "react";
import SearchResults from "../main/gamecard/SearchResults.jsx";
import Darkmode from "./Darkmode.jsx";
import Logo from "./Logo.jsx";
import Searchbar from "./Searchbar.jsx";
import "./Header.css";

export default function Header({ setSelectedGame, setGameSearchHistory }) {
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
      .splice(0, 7);

    setResults(filteredGames);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchDataLocal(value);
  };

  return (
    <div className={"header-component"}>
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
          <div className="search-icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
          </div>

          <Searchbar
            onSearch={(e) => {
              handleChange(e.target.value);
            }}
            value={input}
          />
        </div>
        <div className="darkmode-container">
          <Darkmode />
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
