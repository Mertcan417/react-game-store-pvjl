import { useState } from "react";
import "./App.css";
import GamesSection from "./components/main/GamesSection.jsx";
import SideBar from "./components/sidebar/Sidebar.jsx";
import Header from "./components/header/Header.jsx";

function App() {
  const [results, setResults] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [gameSearchHistory, setGameSearchHistory] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
    <div className="app">
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
