import "./Gamecard.css";

export default function GameCard({
  title,
  imgUrl,
  platforms,
  rating,
  description,
  setSelectedGame,
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

  return (
    // title={selectedGame.name}
    // imgUrl={selectedGame.image}
    // platforms={selectedGame.platforms}
    // rating={selectedGame.store_uscore}
    // description={selectedGame.description}

    <div
      className="card"
      onClick={() =>
        setSelectedGame({
          name: title,
          image: imgUrl,
          platforms: platforms,
          store_uscore: rating,
          description: description,
        })
      }
    >
      <div className="card-image-container">
        <img className="card-image" src={imgUrl} alt="card"></img>
      </div>
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
          <h5 className="game-rating">{rating}</h5>
        </div>
        <h2 className="game-title">{title}</h2>
        {description ?? <p>{description}</p>}
      </div>
    </div>
  );
}
