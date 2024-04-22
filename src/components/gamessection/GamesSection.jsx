import React from 'react';
import GameCardList from "../gamecardlist/GameCardList.jsx";
import SearchedCard from "../searchedcard/SearchedCard.jsx";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import "./GamesSection.css";

export default function GamesSection({
  selectedGame,
  gameSearchHistory,
  setGameSearchHistory,
  selectedGenre,
  setSelectedGame,
}) {
  const { isDarkMode } = useTheme();

  const handlePreviousGameClick = () => {
    setGameSearchHistory(gameSearchHistory.slice(0, -1));
  };

  const renderGameSection = () => (
    <div className="gamesection-component">
      <h1 className="title">Games</h1>
      <GameCardList
        selectedGenre={selectedGenre}
        setSelectedGame={setSelectedGame}
        setGameSearchHistory={setGameSearchHistory}
      />
    </div>
  );

  const renderSearchedCard = () => (
    <div className="search-section-component">
      <img
        src="arrow.png"
        className={`arrow-image ${isDarkMode ? "darkmode" : "lightmode"}`}
        alt="arrow"
        onClick={handlePreviousGameClick}
      />
      <SearchedCard
        title={gameSearchHistory.length > 0 ? gameSearchHistory[gameSearchHistory.length - 1].name : selectedGame.name}
        imgUrl={gameSearchHistory.length > 0 ? gameSearchHistory[gameSearchHistory.length - 1].image : selectedGame.image}
        platforms={gameSearchHistory.length > 0 ? gameSearchHistory[gameSearchHistory.length - 1].platforms : selectedGame.platforms}
        rating={gameSearchHistory.length > 0 ? gameSearchHistory[gameSearchHistory.length - 1].store_uscore : selectedGame.store_uscore}
        description={gameSearchHistory.length > 0 ? gameSearchHistory[gameSearchHistory.length - 1].description : selectedGame.description}
      />
    </div>
  );

  return gameSearchHistory.length === 0 ? renderGameSection() : renderSearchedCard();
}
