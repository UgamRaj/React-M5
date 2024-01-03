import React, { useState } from "react";
import About from "./About/About";
import Certificates from "./Certificates/Certificates";
import Projects from "./Projects/Projects";
import More from "./More/More";
import Contact from "./Contact/Contact";

const Menu = () => {
  const [clicked, setClicked] = useState("About");
  const menu = [
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
    <div className="w-[80%] profile rounded-3xl relative p-[30px] border border-black">
      <div className="absolute top-0 right-0 flex justify-end">
        <ol className="flex justify-end  gap-5 text-[#D6D6D6] font-semibold p-5 px-10 rounded-tr-3xl rounded-bl-3xl bg-[#2B2B2CBF] text-[15px]">
          {menu.map((item) => (
            <li
              className="cursor-pointer hover:text-[#D6D6D665]"
              onClick={() => handleClick(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-20">
        {clicked === "About" && <About />}
        {clicked === "Certificates" && <Certificates />}
        {clicked === "Projects" && <Projects />}
        {clicked === "More" && <More />}
        {clicked === "Contact" && <Contact />}
      </div>
    </div>
  );
};

export default Menu;
