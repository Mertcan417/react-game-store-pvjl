import { useState } from "react";
import DropdownButton from "./DropdownButton.jsx";
import GameCardList from "./gamecard/GameCardList.jsx";
import "./GamesSection.css";
import SearchedCard from "./gamecard/SearchedCard.jsx";
// import SearchedCard from "./SearchedCard.js";

export default function GamesSection({
  selectedGame,
  gameSearchHistory,
  setGameSearchHistory,
  selectedGenre,
  setSelectedGame,
}) {
  const [showPreviousGame, setShowPreviousGame] = useState(false);

  if (selectedGame === null && gameSearchHistory.length === 0) {
    return (
      <div className="gamesection-component">
        <div className="title">
          <h1>Games</h1>
        </div>
        <div className="button-group">
          <DropdownButton
            className="dropdown-button-platforms"
            title={"Platforms"}
            options={[
              "PC",
              "PlayStation",
              "Xbox",
              "iOS",
              "Android",
              "Apple Macintosh",
              "Linux",
              "Nintendo",
              "Atari",
              "Commodore/ Amiga",
              "SEGA",
              "3DO",
              "Neo Geo",
              "Web",
            ]}
          />
          <DropdownButton
            className="dropdown-button-order-by"
            title={"Order by:"}
            options={[
              "Relevance",
              "Date added",
              "Name",
              "Release date",
              "Popularity",
              "Average rating",
            ]}
          />
        </div>
        <div className="game-cards">
          {
            <GameCardList
              selectedGenre={selectedGenre}
              setSelectedGame={setSelectedGame}
            ></GameCardList>
          }
        </div>
      </div>
    );
  }

  if (selectedGame !== null) {
    return (
      <div className="search-section-component">
        <img
          src="arrow.png"
          className="arrow-image"
          alt="arrow"
          onClick={() => {
            // gameSearchHistory.length > 0
            const updateGameSearchHistory = gameSearchHistory.slice(0, -1);
            setShowPreviousGame(true);
            console.log("u want prev game!");
            setGameSearchHistory(updateGameSearchHistory);
          }}
        ></img>
        {showPreviousGame === true ? (
          <SearchedCard
            title={gameSearchHistory[gameSearchHistory.length - 1].name}
            imgUrl={gameSearchHistory[gameSearchHistory.length - 1].image}
            platforms={
              gameSearchHistory[gameSearchHistory.length - 1].platforms
            }
            rating={
              gameSearchHistory[gameSearchHistory.length - 1].store_uscore
            }
            description={
              gameSearchHistory[gameSearchHistory.length - 1].description
            }
          ></SearchedCard>
        ) : (
          <SearchedCard
            title={selectedGame.name}
            imgUrl={selectedGame.image}
            platforms={selectedGame.platforms}
            rating={selectedGame.store_uscore}
            description={selectedGame.description}
          ></SearchedCard>
        )}
      </div>
    );
  }
}
