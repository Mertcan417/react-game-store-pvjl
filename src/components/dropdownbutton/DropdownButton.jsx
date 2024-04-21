import React, { useState } from "react";
import "./DropdownButton.css"; // Import or define styles
import { useTheme } from "../../contexts/ThemeContext";

export default function DropdownButton({ title, options }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { isDarkMode } = useTheme();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
      <button className={`dropdown-button ${isDarkMode ? "darkmode" : "lightmode"}`}
 onClick={toggleDropdown}>
        {title}{" "}
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            aria-hidden="true"
            focusable="false"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            ></path>
          </svg>
        </span>
      </button>
      <div className={`dropdown-content ${isDarkMode ? "darkmode" : "lightmode"}`}>
        {options.map((option, index) => (
          <div className="dropdown-item" key={index}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

