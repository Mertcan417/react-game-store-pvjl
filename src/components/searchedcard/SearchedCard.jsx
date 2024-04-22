import "./SearchedCard.css";
import { useTheme } from "../../contexts/ThemeContext";

export default function SearchedCard({
  title,
  imgUrl,
  platforms,
  rating,
  description,
}) {
  const platformIcons = {
    WIN: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/windows-icon.png",
    MAC: "https://cdn-icons-png.flaticon.com/512/2/2235.png",
    LNX: "https://static-00.iconduck.com/assets.00/linux-icon-417x512-9r27hciu.png",
  };

  const getPlatformIcon = (platform) => {
    const icon = platformIcons[platform];
    return icon;
  };

  const { isDarkMode } = useTheme();

  return (
    <div className="searched-card">
      <div className="searched-card-header">
        <h1>{title}</h1>
        <div className="card-platforms">
          {platforms.split(",").map((p) => (
            <img
              key={p}
              src={getPlatformIcon(p.trim())}
              alt={`${p} icon`}
              className="platform-icon"
            />
          ))}
        </div>
        <h5 className={`game-rating ${isDarkMode ? "darkmode" : "lightmode"}`}>
          {" "}
          {rating}
        </h5>
      </div>
      <div className="searched-card-image">
        <img
          alt="background-of-game"
          className="background-of-game"
          src={imgUrl}
        ></img>
      </div>
      <div className="searched-card-body">
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  );
}
