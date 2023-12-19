import "./Card.css";
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BiSolidComment } from "react-icons/bi";

const Card = ({ movies }) => {
  return (
    <div className="cards">
      <h2>Movies Card</h2>
      {movies.map((movie) => {
        return (
          <>
            <div
              className="card"
              key={movie.id}
              style={{ boxShadow: `1px 0 40px ${movie.color}` }}
            >
              <div className="card-text-container">
                <div className="card-text-top-part">
                  <div className="card-text-container-image">
                    <img src={movie.image_url} alt="title_Photo" />
                  </div>
                  <div className="card-title-container">
                    <h1>{movie.title}</h1>
                    <h3>
                      {movie.release}, {movie.director}
                    </h3>
                    <h4>
                      <button>{movie.duration}</button> {movie.genres}
                    </h4>
                  </div>
                </div>
                <p>{movie.movie_des}</p>
                <div className="links">
                  <ul>
                    <li>
                      <FaShareAlt />
                    </li>
                    <li>
                      <FaHeart />
                    </li>
                    <li>
                      <BiSolidComment />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-main-photo">
                <img src={movie.poster} alt="poster" />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Card;
