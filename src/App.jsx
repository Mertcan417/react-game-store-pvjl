import { useState } from "react";
import GamesSection from "./components/gamessection/GamesSection.jsx";
import SideBar from "./components/sidebar/Sidebar.jsx";
import Header from "./components/header/Header.jsx";
import {useTheme } from "./contexts/ThemeContext.jsx";
import "./App.css";

function App() {
  const { isDarkMode } = useTheme();
  const [results, setResults] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [gameSearchHistory, setGameSearchHistory] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
      <div className={`app ${isDarkMode ? "darkmode" : "lightmode"}`}>
        <Header
          setResults={setResults}
          setSelectedGame={setSelectedGame}
          setGameSearchHistory={setGameSearchHistory}
        />
        <SideBar setSelectedGenre={setSelectedGenre} />
        <GamesSection
          selectedGame={selectedGame}
          setSelectedGame={setSelectedGame}
          gameSearchHistory={gameSearchHistory}
          setGameSearchHistory={setGameSearchHistory}
          selectedGenre={selectedGenre}
        />
      </div>
  );
}

export default App;
