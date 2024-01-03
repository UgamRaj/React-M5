import React from "react";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import TranslateIcon from "@mui/icons-material/Translate";
import texhnicalCompetence from "./technicalCompetence.json";
import professionalSkill from "./professionalSkill.json";

const Certificates = () => {
  return (
    <>
      <article className="certificates active" data-page="certificates">
        <header>
          <h2 className="h2 article-title">My Certificates</h2>
        </header>

        <br />

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <DesktopWindowsOutlinedIcon />
            </div>

            <h3 className="h3">Technical Competence</h3>
          </div>

          <ol className="timeline-list">
            {texhnicalCompetence.map(({ title, imgUrl, timeline }) => {
              return (
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">{title}</h4>
                  <p className="timeline-text">{timeline}</p>

                  <div className="certificate-container">
                    <img
                      alt=""
                      src={imgUrl}
                      onClick={() => window.open(imgUrl)}
                    />
                  </div>
                </li>
              );
            })}
          </ol>

          <br />

          <div className="title-wrapper">
            <div className="icon-box">
              <PeopleOutlineOutlinedIcon />
            </div>

            <h3 className="h3">Professional Skills</h3>
          </div>

          <ol className="timeline-list">
            {professionalSkill.map(({ title, imgUrl, timeline }) => {
              return (
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">{title}</h4>
                  <p className="timeline-text">{timeline}</p>

                  <div className="certificate-container">
                    <img
                      alt=""
                      src={imgUrl}
                      onClick={() => window.open(imgUrl)}
                    />
                  </div>
                </li>
              );
            })}
          </ol>

          <br />

          <div className="title-wrapper">
            <div className="icon-box">
              <TranslateIcon />
            </div>

            <h3 className="h3">Language Proficiency</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">German Language C1</h4>
              <p className="timeline-text">
                TELC European Language Certificates
              </p>
              <div className="certificate-container">
                <img
                  alt=""
                  src="https://oktayshakirov.com/assets/images/certificates/german-c1.png"
                  onClick={() =>
                    window.open(
                      "https://oktayshakirov.com/assets/images/certificates/german-c1.png"
                    )
                  }
                />
              </div>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">English Language B2</h4>
              <p className="timeline-text">LinguaTV GmbH</p>
              <div className="certificate-container">
                <img
                  alt=""
                  src="https://oktayshakirov.com/assets/images/certificates/english-b2.png"
                  onClick={() =>
                    window.open(
                      "https://oktayshakirov.com/assets/images/certificates/english-b2.png"
                    )
                  }
                />
              </div>
            </li>
          </ol>

          <div className="pagination-box">
            <button
              className="pagination-button"
              data-nav-link
              data-target-section="projects"
            >
              Next
            </button>
          </div>
        </section>
      </article>
    </>
  );
};

export default Certificates;
