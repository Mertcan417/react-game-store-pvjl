import { useTheme } from "../../contexts/ThemeContext.jsx";
import "./Darkmode.css";

export default function Darkmode() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
        <span className="slider round"/>
      </label>
      <span>Dark Mode</span>
    </>
  );
}

// import { useState } from "react";
// import "./Darkmode.css";

// export default function Darkmode() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     document.body.classList.toggle("dark-mode", !isDarkMode);
//   };

//   return (
//     <>
//       <label className="switch">
//         <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
//         <span className="slider round" />
//       </label>
//       <span>Dark Mode</span>
//     </>
//   );
// }
