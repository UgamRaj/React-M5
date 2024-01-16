import "./NavBar.css";
import { Link } from "react-router-dom";
import DarkLight from "../DarkLight/DarkLight";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="leftHeader">
        <h2>TextUtils</h2>
        <ul>
          <li>
            <Link to={"./"}>Home</Link>
          </li>
          <li>
            <Link to={"./about"}>About Us</Link>
          </li>
          <li>
            <Link to={"./contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <DarkLight />
    </div>
  );
};

export default NavBar;
