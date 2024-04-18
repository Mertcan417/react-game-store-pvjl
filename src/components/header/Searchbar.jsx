import "./Searchbar.css";
import { useTheme } from "../../contexts/ThemeContext.jsx";

export default function Searchbar({ onSearch, value }) {
  const { isDarkMode } = useTheme();

  return (
    <div className="searchbar">
      <input
        type="text"
        className={`searchbar-input ${isDarkMode ? "darkmode" : "lightmode"}`}
        placeholder="Search games..."
        onChange={onSearch}
        value={value}
      />
    </div>
  );
}
