import { useState, useEffect } from "react";
import GamesSection from "./components/gamessection/GamesSection.jsx";
import SideBar from "./components/sidebar/Sidebar.jsx";
import Header from "./components/header/Header.jsx";
import { useTheme } from "./contexts/ThemeContext.jsx";
import "./App.css";

function App() {
  const { isDarkMode } = useTheme();
  const [results, setResults] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [gameSearchHistory, setGameSearchHistory] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const minScreenWidth = 1381;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); //Empty dependency array to run effect only once

  if (screenWidth < minScreenWidth) {
    return (
      <div>
        <h1>Sorry, your screen resolution is not supported.</h1>
        <p>
          Please adjust your display settings or try using the application on
          a device with a larger screen.
        </p>
      </div>
    );
  }

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
