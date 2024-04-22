import { useEffect, useState } from "react";
import GameCard from "../gamecard/GameCard";
import "./GameCardList.css";

export default function GameCardList({ selectedGenre, setSelectedGame }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch data from the local JSON file
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        const data = await response.json();
        if (selectedGenre == null) {
          setCards(data.cards.slice(0, 11));
        } else {
          setCards(
            data.cards
              .filter((game) => game.genres.includes(selectedGenre))
              .slice(0, 11)
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedGenre]);

  return (
    <div className="game-cards">
      {cards.map((card) => (
        <GameCard
          key={card.sid}
          title={card.name}
          imgUrl={card.image}
          platforms={card.platforms}
          rating={card.store_uscore}
          setSelectedGame={setSelectedGame}
          description={card.description}
        />
      ))}
    </div>
  );
}
