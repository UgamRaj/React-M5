import { useState } from "react";
import PrimaryFocus from "../PrimaryFocus/PrimaryFocus";
import Progress from "../ProgressBar/ProgressBar";
import DevSkill from "./DevSkill";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const showMoreHandler = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <article className="about  active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text content-card">
          <div id="expandable-section">
            <p>
              Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As
              a Full-Stack software developer, I specialize in creating visually
              appealing websites, apps and mobile games. My passion for graphic
              design isn't just a hobby, it's a key ingredient in every project
              I work on.
            </p>
            <div id="more" style={{ display: showMore ? "block" : "none" }}>
              <p>
                Growing up bilingual, I developed a love for languages and I
                currently speak four of them fluently. I believe that this skill
                has given me a unique perspective and allows me to communicate
                effectively with clients from all over the world. One of my
                strengths is adding a personal touch to my projects by adding
                the client's identity and message into the design, creating
                meaningful and beautiful end products that are both eye-catching
                and user-friendly.
              </p>

              <p>
                In my free time, I enjoy exploring my other passions, such as
                photography and music production, which provide me with creative
                outlets. I am also very passionate about Web3 and everything
                related to crypto, NFTs and blockchain technology as I believe
                they have the potential to revolutionize business and online
                interactions.
              </p>
              <p>
                If you have an innovative idea for a project that needs to be
                developed, I would love to hear from you. Your vision can be
                turned into a real product. Don't hesitate to reach out and
                let's start a conversation about your concept. I'm excited to
                collaborate and help bring your ideas to life.
              </p>
            </div>
          </div>
          <center>
            <button
              className="more"
              id="toggle-button"
              onClick={showMoreHandler}
            >
              &darr; &nbsp; &nbsp; {showMore ? "Hide Text" : "Show more"} &nbsp;
              &nbsp; &darr;
            </button>
          </center>
        </section>

        <section className="service">
          <h3 className="h3 service-title">Primary Focus</h3>

          <ul className="service-list">
            <PrimaryFocus
              serviceImage={
                "https://oktayshakirov.com/assets/images/icon-dev.svg"
              }
              serviceTitle="Web Design & Development"
              serviceText="Creating attractive, easy-to-use websites that work well for businesses and individuals online"
              serviceAlt={"Web development icon"}
            />
            <PrimaryFocus
              serviceImage={
                "https://oktayshakirov.com/assets/images/icon-app.svg"
              }
              serviceTitle="Mobile Apps & Games"
              serviceText="Creating and developing engaging mobile apps and games for iOS
                  and Android devices."
              serviceAlt={"mobile app icon"}
            />
            <PrimaryFocus
              serviceImage={
                "https://oktayshakirov.com/assets/images/icon-frameworks.svg"
              }
              serviceTitle="Development Solutions"
              serviceText="Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications."
              serviceAlt={"frameworks icon"}
            />
            <PrimaryFocus
              serviceImage={
                "https://oktayshakirov.com/assets/images/icon-marketing.svg"
              }
              serviceTitle="Marketing & SEO"
              serviceText="Using SEO and marketing strategies to boost online visibility and promote products or services."
              serviceAlt={"frameworks icon"}
            />
          </ul>
        </section>
        <br />

        <section className="service">
          <h3 className="h3 service-title">Exploring Creativity</h3>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="https://oktayshakirov.com/assets/images/icon-video.svg"
                  alt="video icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Visual Storytelling</h4>

                <p className="service-item-text">
                  Taking and editing photos or videos that tell engaging
                  stories, bringing concepts and ideas to life visually.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="https://oktayshakirov.com/assets/images/icon-multimedia.svg"
                  alt="multimedia icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">
                  Digital Content Creation
                </h4>

                <p className="service-item-text">
                  Creatiing dynamic digital content, such as 3D models, graphics
                  or animations.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <h3 className="h3 languages-title">Programming Languages</h3>

        <section className="languages content-card">
          <ul className="languages-list">
            <li className="languages-item">
              <div className="title-wrapper">
                <h5 className="h5">JavaScript</h5>
                <data value="80">80%</data>
              </div>

              <Progress width="80%" />
            </li>

            <li className="languages-item">
              <div className="title-wrapper">
                <h5 className="h5">TypeScript</h5>
                <data value="50">50%</data>
              </div>

              <Progress width="50%" />
            </li>

            <li className="languages-item">
              <div className="title-wrapper">
                <h5 className="h5">PHP</h5>
                <data value="40">40%</data>
              </div>

              <Progress width="40%" />
            </li>

            <li className="languages-item">
              <div className="title-wrapper">
                <h5 className="h5">Python</h5>
                <data value="25">25%</data>
              </div>

              <Progress width="25%" />
            </li>

            <li className="languages-item">
              <div className="title-wrapper">
                <h5 className="h5">CSS</h5>
                <data value="95">95%</data>
              </div>

              <Progress width="95%" />
            </li>

            <li className="languages-item">
              <div className="title-wrapper">
                <h5 className="h5">HTML</h5>
                <data value="100">100%</data>
              </div>

              <Progress width="100%" />
            </li>
          </ul>
        </section>

        <br />

        <h3 className="h3 languages-title">Human Languages</h3>

        <section className="languages content-card">
          <ul className="languages-list">
            <li className="languages-item">
              <div className="title-wrapper">
                <h5 className="h5">English</h5>
                <data value="fluent">Fluent</data>
              </div>
              <Progress width="100%" />
            </li>

            <li className="languages-item">
              <div className="title-wrapper">
                <h5 className="h5">Hindi</h5>
                <data value="fluent">Fluent</data>
              </div>

              <Progress width="100%" />
            </li>

            <li className="languages-item">
              <div className="title-wrapper">
                <h5 className="h5">Bulgarian</h5>
                <data value="fluent">Native</data>
              </div>

              <Progress width="100%" />
            </li>

            <li className="languages-item">
              <div className="title-wrapper">
                <h5 className="h5">Turkish</h5>
                <data value="fluent">Bilingual</data>
              </div>

              <Progress width="80%" />
            </li>
          </ul>
        </section>

        <br />

        <h3 className="h3 technologies-title">Development Skills</h3>
        <br />
        <DevSkill />

        <br />

        <section className="hobbies">
          <h3 className="h3 hobbies-title">Favorite Activities</h3>

          <ul className="hobbies-list has-scrollbar">
            <li className="hobbies-item" id="1">
              <div className="content-card" data-hobbies-item>
                <figure className="hobbies-avatar-box">
                  <img
                    src="	https://oktayshakirov.com/assets/images/finances.png"
                    alt="finances"
                    width="60"
                    data-hobbies-avatar
                  />
                </figure>

                <h4 className="h4 hobbies-item-title" data-hobbies-title>
                  Investments
                </h4>

                <div className="hobbies-text" data-hobbies-text>
                  <p>
                    Exploring Stocks, Crypto and Long-Term Growth Opportunities
                    for Financial Investment
                  </p>
                </div>
              </div>
            </li>

            <li className="hobbies-item" id="2">
              <div className="content-card" data-hobbies-item>
                <figure className="hobbies-avatar-box">
                  <img
                    src="	https://oktayshakirov.com/assets/images/music.png"
                    alt="music"
                    width="60"
                    data-hobbies-avatar
                  />
                </figure>

                <h4 className="h4 hobbies-item-title" data-hobbies-title>
                  Music
                </h4>

                <div className="hobbies-text" data-hobbies-text>
                  <p>
                    Creating Instrumentals, Mixing and Mastering Tracks and
                    Collaborating with Musicians
                  </p>
                </div>
              </div>
            </li>

            <li className="hobbies-item" id="3">
              <div className="content-card" data-hobbies-item>
                <figure className="hobbies-avatar-box">
                  <img
                    src="https://oktayshakirov.com/assets/images/traveling.png"
                    alt="traveling"
                    width="60"
                    data-hobbies-avatar
                  />
                </figure>

                <h4 className="h4 hobbies-item-title" data-hobbies-title>
                  Traveling
                </h4>

                <div className="hobbies-text" data-hobbies-text>
                  <p>
                    Exploring new places, learn about different cultures and
                    create lifelong memories.
                  </p>
                </div>
              </div>
            </li>

            <li className="hobbies-item" id="4">
              <div className="content-card" data-hobbies-item>
                <figure className="hobbies-avatar-box">
                  <img
                    src="https://oktayshakirov.com/assets/images/camera.png"
                    alt="photography"
                    width="60"
                    data-hobbies-avatar
                  />
                </figure>

                <h4 className="h4 hobbies-item-title" data-hobbies-title>
                  Photography
                </h4>

                <div className="hobbies-text" data-hobbies-text>
                  <p>
                    Capturing precious moments and memories through the lens of
                    a camera.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <div className="pagination-box">
          <button
            className="pagination-button"
            data-nav-link
            data-target-section="certificates"
          >
            Next
          </button>
        </div>
      </article>
    </>
  );
};

export default About;
