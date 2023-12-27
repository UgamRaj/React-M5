import React from "react";
import "./Card.css";
import Rating from "@mui/material/Rating";

const Card = ({
  URL,
  address,
  name,
  rating,
  type_of_food,
  outcode,
  postcode,
}) => {
  return (
    <>
      <div className="card">
        <div className="cardTop">
          <div className="cardHeading">
            <h2>{name}</h2>
            <div className="starContainer">
              <Rating
                name="read-only"
                value={rating}
                precision={0.5}
                readOnly
              />
            </div>
          </div>

          <div className="cardAddress">
            <div className="locationContainer">
              <img src="/address.svg" alt="location" />
            </div>
            <p>{address}, Cardiff</p>
          </div>
          <p>
            {outcode} {postcode}
          </p>
        </div>
        <div className="cardBottom">
          <div className="foodContainer">
            <div className="cardFoodIcon">
              <img src="/food.svg" alt="spoon" />
            </div>
            <p className="foodName">{type_of_food}</p>
          </div>
          <a href={URL}>Visit Menu</a>
        </div>
      </div>
    </>
  );
};

export default Card;
