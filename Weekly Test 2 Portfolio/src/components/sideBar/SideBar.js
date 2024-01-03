import { useEffect, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./SideBar.css";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";

const SideBar = () => {
  const [btnText, setBtnText] = useState("");
  const [age, setAge] = useState(1);

  // ! fot hello world text updated according with binary number
  useEffect(() => {
    let randomNUm = "",
      counter = 0;
    const interValId = setInterval(() => {
      randomNUm = "";
      for (let i = 0; i < 10; i++) {
        randomNUm += Math.floor(Math.random() * 2);
      }
      counter++;
      setBtnText(randomNUm);
      if (counter === 10) {
        clearInterval(interValId);
        setBtnText("Hello,World");
      }
    }, 100);
  }, []);

  // ! it render age value
  useEffect(() => {
    // let counter = 0;
    const intervalId = setInterval(() => {
      // counter++;
      setAge((prevAge) => {
        const newAge = prevAge + 1;
        if (newAge === 29) {
          clearInterval(intervalId);
        }
        return newAge;
      });
    }, 200);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="https://oktayshakirov.com/assets/images/avatar.jpg"
            alt="Oktay Shakirov"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Oktay Shakirov">
            Oktay Shakirov
          </h1>

          <p className="title notranslate" id="motto">
            {btnText}
          </p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <ion-icon name="swap-vertical"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <HourglassEmptyIcon />
            </div>
            <div className="contact-info">
              <p className="contact-title">Age</p>
              <time id="age" className="counting-animation">
                {age} years old
              </time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LocationOnIcon />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Rajasthan, India</address>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <PersonIcon />
            </div>
            <div className="contact-info">
              <p className="contact-title">Personality Type</p>
              <address>INTJ-T</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://github.com/UgamRaj?tab=repositories"
              className="social-link"
            >
              <GitHubIcon />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/oktayshakirov"
              className="social-link"
            >
              <LinkedInIcon />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.instagram.com/oktay.shakirov/"
              className="social-link"
            >
              <InstagramIcon />
            </a>
          </li>

          <li className="social-item">
            <a href="https://twitter.com/oktayshakirov" className="social-link">
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
