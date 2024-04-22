import { useTheme } from "../../contexts/ThemeContext.jsx";
import "./Darkmode.css";

export default function Darkmode({children}) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
        <span className="slider round" />
      </label>
      <span>{children}</span>
    </>
  );
}