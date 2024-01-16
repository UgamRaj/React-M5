import { useEffect, useState } from "react";
import "./DarkLight.css";

const DarkLight = () => {
  const [theme, setTheme] = useState("lightTheme");

  const toggleTheme = () => {
    // console.log(theme);
    theme === "lightTheme" ? setTheme("darkTheme") : setTheme("lightTheme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="rightHeader">
      <div className="lightDark">
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label
          htmlFor="checkbox"
          className="checkbox-label"
          onClick={toggleTheme}
        >
          <span className="ball"></span>
        </label>
      </div>
    </div>
  );
};

export default DarkLight;
