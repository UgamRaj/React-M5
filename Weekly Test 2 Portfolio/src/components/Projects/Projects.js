import React from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  return (
    <>
      <article className="projects active" data-page="projects">
        <header>
          <h2 className="h2 article-title">My Projects</h2>
        </header>

        <section className="projects notranslate">
          <ul className="filter-list">
            <li className="filter-item">
              <button className="active" data-filter-btn>
                All
              </button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Websites</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Applications</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Games</button>
            </li>
          </ul>

          <div className="filter-select-box">
            <button className="filter-select" data-select>
              <div className="select-value" data-selecct-value>
                Select category
              </div>

              <div className="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>
            </button>

            <ul className="select-list">
              <li className="select-item">
                <button data-select-item>All</button>
              </li>

              <li className="select-item">
                <button data-select-item>Websites</button>
              </li>

              <li className="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li className="select-item">
                <button data-select-item>Games</button>
              </li>
            </ul>
          </div>

          <ul className="project-list">
            <li
              className="project-item active"
              data-filter-item
              data-category="websites"
            >
              <a href="https://">
                <figure className="project-img">
                  <img
                    src="https://oktayshakirov.com/assets/images/projects/mybestwishes.jpg"
                    loading="lazy"
                    alt="mybestwishes"
                  />
                </figure>
              </a>
              <h3 className="project-title">MyBestWishes AI Generator</h3>
              <p className="project-category">Design + Frontend</p>
              <p className="project-development">
                Figma | React.js | Chakra UI
              </p>
              <div className="project-buttons">
                <a
                  href="https://"
                  style={{ pointerEvents: "none", opacity: "0.6" }}
                >
                  <VisibilityOutlinedIcon fontSize="small" /> Preview
                </a>
              </div>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="websites"
            >
              <a href="https://">
                <figure className="project-img">
                  <img
                    src="	https://oktayshakirov.com/assets/images/projects/myworkphoto.png"
                    alt=""
                    loading="lazy"
                  />
                </figure>
              </a>
              <h3 className="project-title">MyWorkPhoto AI Generator</h3>
              <p className="project-category">Design + Frontend</p>
              <p className="project-development">
                Figma | React.js | Chakra UI
              </p>
              <div className="project-buttons">
                <a
                  href="https://"
                  style={{ pointerEvents: "none", opacity: "0.6" }}
                >
                  <VisibilityOutlinedIcon fontSize="small" /> Preview
                </a>
              </div>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="applications"
            >
              <a href="https://">
                <figure className="project-img">
                  <img
                    src="	https://oktayshakirov.com/assets/images/projects/ogno-dashboard.png"
                    alt=""
                    loading="lazy"
                  />
                </figure>
              </a>
              <h3 className="project-title">Ogno Marketing Dashboard</h3>
              <p className="project-category">Fullstack Project</p>
              <p className="project-development">
                React.js | Strapi.js | MySQL
              </p>
              <div className="project-buttons">
                <a href="https://github.com/oktayshakirov/marketing-dashboard">
                  <GitHubIcon fontSize="small" /> GitHub
                </a>
              </div>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="websites"
            >
              <a href="https://askmed.bayer.com/">
                <figure className="project-img">
                  <img
                    src="https://oktayshakirov.com/assets/images/projects/bayer-askmed.png"
                    alt=""
                    loading="lazy"
                  />
                </figure>
              </a>
              <h3 className="project-title">AskMed by Bayer</h3>
              <p className="project-category">Website + Chatbot</p>
              <p className="project-development">Drupal | PHP | CSS</p>
              <div className="project-buttons">
                <a href="https://askmed.bayer.com/">
                  <VisibilityOutlinedIcon fontSize="small" /> Preview
                </a>
              </div>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="websites"
            >
              <a href="https://enemzet.store/">
                <figure className="project-img">
                  <img
                    src="https://oktayshakirov.com/assets/images/projects/enemzet.png"
                    alt=""
                    loading="lazy"
                  />
                </figure>
              </a>
              <h3 className="project-title">EnEmZet Online Store</h3>
              <p className="project-category">Website + Admin Panel</p>
              <p className="project-development">
                Next.js | TypeScript | MySQL
              </p>
              <div className="project-buttons">
                <a href="https://enemzet.store/">
                  <VisibilityOutlinedIcon fontSize="small" /> Preview
                </a>
                <a href="https://github.com/En-Em-Zet">
                  <GitHubIcon fontSize="small" /> GitHub
                </a>
              </div>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="websites"
            >
              <a href="https://www.beyondtinnitus.online/">
                <figure className="project-img">
                  <img
                    src="https://oktayshakirov.com/assets/images/projects/tinnitus-blog.png"
                    loading="lazy"
                    alt=""
                  />
                </figure>
              </a>
              <h3 className="project-title">Beyond Tinnitus Blog</h3>
              <p className="project-category">Website</p>
              <p className="project-development">
                Next.js | TypeScript | Material-UI
              </p>
              <div className="project-buttons">
                <a href="https://www.beyondtinnitus.online/">
                  <VisibilityOutlinedIcon fontSize="small" /> Preview
                </a>
                <a href="https://github.com/oktayshakirov/tinnitus-blog">
                  <GitHubIcon fontSize="small" /> GitHub
                </a>
              </div>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="websites"
            >
              <a href="https://timeazon.netlify.app/">
                <figure className="project-img">
                  <img
                    src="	https://oktayshakirov.com/assets/images/projects/watch_store.png"
                    alt=""
                    loading="lazy"
                  />
                </figure>
              </a>
              <h3 className="project-title">Timeazon Online Store</h3>
              <p className="project-category">Website + Admin Panel</p>
              <p className="project-development">
                React.js | Node.js | MySQL | Sass
              </p>
              <div className="project-buttons">
                <a href="https://timeazon.netlify.app/">
                  <VisibilityOutlinedIcon fontSize="small" /> Preview
                </a>
                <a href="https://github.com/oktayshakirov/timeazon-fullstack">
                  <GitHubIcon fontSize="small" /> GitHub
                </a>
              </div>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="applications"
            >
              <a href="https://oktayshakirov.github.io/weather-app/">
                <figure className="project-img">
                  <img
                    src="	https://oktayshakirov.com/assets/images/projects/weather-app.png"
                    alt=""
                    loading="lazy"
                  />
                </figure>
              </a>
              <h3 className="project-title">Weather App</h3>
              <p className="project-category">Application</p>
              <p className="project-development">JavaScript | API's | CSS</p>
              <div className="project-buttons">
                <a href="https://oktayshakirov.github.io/weather-app/">
                  <VisibilityOutlinedIcon fontSize="small" /> Preview
                </a>
                <a href="https://github.com/oktayshakirov/weather-app">
                  <GitHubIcon fontSize="small" /> GitHub
                </a>
              </div>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="games"
            >
              <a href="https://oktayshakirov.github.io/pigletz-matching/">
                <figure className="project-img">
                  <img
                    src="https://oktayshakirov.com/assets/images/projects/pigletz-matching.png"
                    alt=""
                    loading="lazy"
                  />
                </figure>
              </a>
              <h3 className="project-title">Pigletz Memory Game</h3>
              <p className="project-category">Web Game</p>
              <p className="project-development">JavaScript | CSS </p>
              <div className="project-buttons">
                <a href="https://oktayshakirov.github.io/pigletz-matching/">
                  <VisibilityOutlinedIcon fontSize="small" /> Preview
                </a>
                <a href="https://github.com/oktayshakirov/pigletz-matching">
                  <GitHubIcon fontSize="small" /> GitHub
                </a>
              </div>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="applications"
            >
              <a href="https://oktayshakirov.000webhostapp.com/team-manager/">
                <figure className="project-img">
                  <img
                    src="https://oktayshakirov.com/assets/images/projects/team-manager.png"
                    alt=""
                    loading="lazy"
                  />
                </figure>
              </a>
              <h3 className="project-title">Team Management Tool</h3>
              <p className="project-category">Application</p>
              <p className="project-development">PHP | CSV Data | CSS </p>
              <div className="project-buttons">
                <a href="https://oktayshakirov.000webhostapp.com/team-manager/">
                  <VisibilityOutlinedIcon fontSize="small" /> Preview
                </a>
                <a href="https://github.com/oktayshakirov/team-manager">
                  <GitHubIcon fontSize="small" /> GitHub
                </a>
              </div>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="websites"
            >
              <a href="https://oktayshakirov.com">
                <figure className="project-img">
                  <img
                    src="https://oktayshakirov.com/assets/images/projects/portfolio.png"
                    alt=""
                    loading="lazy"
                  />
                </figure>
              </a>
              <h3 className="project-title">Personal Portfolio</h3>
              <p className="project-category">Website</p>
              <p className="project-development">JavaScript | CSS | HTML </p>
              <div className="project-buttons">
                <a href="https://oktayshakirov.com">
                  <VisibilityOutlinedIcon fontSize="small" /> Preview
                </a>
                <a href="https://github.com/oktayshakirov/portfolio">
                  <GitHubIcon fontSize="small" /> GitHub
                </a>
              </div>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="games"
            >
              <a href="https://oktayshakirov.000webhostapp.com/quiz">
                <figure className="project-img">
                  <img
                    src="	https://oktayshakirov.com/assets/images/projects/quiz.png"
                    alt=""
                    loading="lazy"
                  />
                </figure>
              </a>
              <h3 className="project-title">Quiz Time</h3>
              <p className="project-category">Game</p>
              <p className="project-development">PHP | CSS | HTML </p>
              <div className="project-buttons">
                <a href="https://oktayshakirov.000webhostapp.com/quiz">
                  <VisibilityOutlinedIcon fontSize="small" /> Preview
                </a>
                <a href="https://github.com/oktayshakirov/quiz">
                  <GitHubIcon fontSize="small" /> GitHub
                </a>
              </div>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="applications"
            >
              <a href="https://berlinew.wordpress.com/categories">
                <figure className="project-img">
                  <img
                    src="https://oktayshakirov.com/assets/images/projects/berlinew.jpg"
                    alt=""
                    loading="lazy"
                  />
                </figure>
              </a>
              <h3 className="project-title">BerliNEW Android App</h3>
              <p className="project-category">Application</p>
              <p className="project-development">Wordpress | Android SDK</p>
              <div className="project-buttons">
                <a href="https://berlinew.wordpress.com/categories">
                  <VisibilityOutlinedIcon fontSize="small" />
                  &nbsp; Preview
                </a>
              </div>
            </li>
          </ul>

          <div className="pagination-box">
            <button
              className="pagination-button"
              data-nav-link
              data-target-section="more"
            >
              Next
            </button>
          </div>
        </section>
      </article>
    </>
  );
};

export default Projects;
