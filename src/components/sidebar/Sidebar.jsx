import { GenreList } from "../genre/Genre.jsx";

export default function Sidebar({ setSelectedGenre }) {
  return (
    <div className="sidebar-component">
      <div className="sidebar-header">
        <h2>Genres</h2>
      </div>
      <div className="sidebar-body">
        <GenreList setSelectedGenre={setSelectedGenre} />
      </div>
    </div>
  );
}
