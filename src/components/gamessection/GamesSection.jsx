import { useState } from "react";
import GameCardList from "../gamecardlist/GameCardList.jsx";
import "./GamesSection.css";
import SearchedCard from "../searchedcard/SearchedCard.jsx";
import { useTheme } from "../../contexts/ThemeContext.jsx";

export default function GamesSection({
  selectedGame,
  gameSearchHistory,
  setGameSearchHistory,
  selectedGenre,
  setSelectedGame,
}) {
  const { isDarkMode } = useTheme();

  const homePage = (
    <div className="gamesection-component">
      <h1 className="title">Games</h1>
      <GameCardList
        selectedGenre={selectedGenre}
        setSelectedGame={setSelectedGame}
        setGameSearchHistory={setGameSearchHistory}
      ></GameCardList>
    </div>
  );

  if (gameSearchHistory.length === 0) {
    return homePage;
  }

  if (gameSearchHistory.length > 0) {
    return (
      <div className="search-section-component">
        <img
          src="arrow.png"
          className={`arrow-image ${isDarkMode ? "darkmode" : "lightmode"}`}
          alt="arrow"
          onClick={() => {
            const updateGameSearchHistory = gameSearchHistory.slice(0, -1);
            console.log(updateGameSearchHistory);
            setGameSearchHistory(updateGameSearchHistory);
          }}
        ></img>
        {gameSearchHistory.length > 0 ? (
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
