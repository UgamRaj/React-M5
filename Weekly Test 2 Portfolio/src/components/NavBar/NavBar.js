import About from "../About/About";
import Certificates from "../Certificates/Certificates";
import Projects from "../Projects/Projects";
import More from "../More/More";
import Contacts from "../Contacts/Contact";
import { useState } from "react";

const NavBar = () => {
  const [clicked, setClicked] = useState("About");
  const allLinks = [
    {
      name: "About",
    },
    {
      name: "Certificates",
    },
    {
      name: "Projects",
    },
    {
      name: "More",
    },
    {
      name: "Contact",
    },
  ];

  const handleClick = (Value) => {
    if (Value === "About") {
      setClicked("About");
    } else if (Value === "Certificates") {
      setClicked("Certificates");
    } else if (Value === "Projects") {
      setClicked("Projects");
    } else if (Value === "More") {
      setClicked("More");
    } else if (Value === "Contact") {
      setClicked("Contact");
    }
  };

  return (
    <>
      <nav className="navbar notranslate">
        <ul className="navbar-list">
          {allLinks.map((link) => {
            return (
              <li className="navbar-item">
                <button
                  className={
                    "navbar-link " + (clicked === link.name ? "active" : "")
                  }
                  data-nav-link=""
                  onClick={() => handleClick(link.name)}
                >
                  {link.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      {clicked === "About" && <About />}
      {clicked === "Certificates" && <Certificates />}
      {clicked === "Projects" && <Projects />}
      {clicked === "More" && <More />}
      {clicked === "Contact" && <Contacts />}
    </>
  );
};

export default NavBar;
