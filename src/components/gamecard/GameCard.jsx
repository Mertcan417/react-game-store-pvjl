import "./GameCard.css";
import { useTheme } from "../../contexts/ThemeContext";

const platformIcons = {
  WIN: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/windows-icon.png",
  MAC: "https://cdn-icons-png.flaticon.com/512/2/2235.png",
  LNX: "https://static-00.iconduck.com/assets.00/linux-icon-417x512-9r27hciu.png",
};

const getPlatformIcon = (platform) => {
  const icon = platformIcons[platform];
  return icon;
};

export default function GameCard({
  title,
  imgUrl,
  platforms,
  rating,
  description,
  setSelectedGame,
  setGameSearchHistory,
}) {
  const { isDarkMode } = useTheme();

  function handleSelectedGame() {
    const game = {
      name: title,
      image: imgUrl,
      platforms: platforms,
      store_uscore: rating,
      description: description,
    };
    setGameSearchHistory((prevHistory) => [...prevHistory, game]);
    setSelectedGame(game);
  }

  return (
    <div
      className={`card ${isDarkMode ? "darkmode" : "lightmode"}`}
      onClick={handleSelectedGame}
    >
      <img className="card-image" src={imgUrl} alt="card"></img>
      <div className="card-content">
        <div className="card-platforms">
          {platforms.split(",").map((p) => (
            <img
              key={p}
              src={getPlatformIcon(p.trim())}
              alt={`${p} icon`}
              className="platform-icon"
            />
          ))}
          <h5
            className={`game-rating ${isDarkMode ? "darkmode" : "lightmode"}`}
          >
            {rating}
          </h5>
        </div>
        <h2 className="game-title">{title}</h2>
        {description ?? <p>{description}</p>}
      </div>
    </div>
  );
}
