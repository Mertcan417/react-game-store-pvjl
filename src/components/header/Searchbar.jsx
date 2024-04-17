import "./Searchbar.css";

export default function Searchbar({ onSearch, value }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search games..."
        onChange={onSearch}
        value={value}
      />
    </div>
  );
}
