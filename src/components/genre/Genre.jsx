import { useEffect, useState } from "react";
import "./Genre.css";
export default function Genre({ img, title, onClick }) {
  return (
    <div className="genre-component">
      <img className="genre-image" src={img} alt={`${title} genre`}></img>
      <h5 className="genre-title" onClick={() => onClick(title)}>
        {title}
      </h5>
    </div>
  );
}

export function GenreList({ setSelectedGenre }) {
  const [genres, setGenres] = useState([]);

  const handleGenreClick = (title) => {
    setSelectedGenre(title);
  };

  useEffect(() => {
    // Fetch data from the local JSON file
    const fetchData = async () => {
      try {
        const response = await fetch("genre.json");
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul className="genre-list">
      {genres.map((genre) => (
        <li className="genre-list-item">
          <Genre
            key={genre.id}
            img={genre.img}
            title={genre.title}
            onClick={handleGenreClick}
          ></Genre>
        </li>
      ))}
    </ul>
  );
}
