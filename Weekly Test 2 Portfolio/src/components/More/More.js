import React from "react";
import allCards from "./more.json";

const More = () => {
  return (
    <>
      <article className="more active" data-page="more">
        <header>
          <h2 className="h2 article-title">Side Projects</h2>
        </header>

        <section className="blog-posts">
          <ul className="blog-posts-list">
            {allCards.map(
              ({
                imgUrl,
                category1,
                category2,
                title,
                text,
                globe,
                insta,
                yt,
              }) => {
                return (
                  <li className="blog-card">
                    <figure className=" blog-banner-box">
                      <img src={imgUrl} alt="" loading="lazy" />
                    </figure>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <p className="blog-category">{category1}</p>
                        <span className="dot"></span>
                        <p className="blog-category">{category2}</p>
                      </div>
                      <h3 className="h3 blog-item-title">{title}</h3>
                      <p className="blog-text">I{text}</p>
                    </div>
                    <div className="project-buttons">
                      <a href="https://pigletz.com">
                        <ion-icon name="globe-outline"></ion-icon> {globe}
                      </a>
                      <a href="https://www.instagram.com/pigletznft">
                        <ion-icon name="camera-outline"></ion-icon> {insta}
                      </a>
                      <a href="https://www.youtube.com/@PigletzNFT">
                        <ion-icon name="videocam"></ion-icon> {yt}
                      </a>
                    </div>
                  </li>
                );
              }
            )}
          </ul>

          <div className="pagination-box">
            <button
              className="pagination-button"
              data-nav-link
              data-target-section="contact"
            >
              Next{" "}
            </button>
          </div>
        </section>
      </article>
    </>
  );
};

export default More;
