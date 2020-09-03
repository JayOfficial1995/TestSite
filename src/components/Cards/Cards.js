import React from "react";
import "./cards.css";

function Cards({ cardImg, name, relation }) {
  return (
    <figure className="card-wrapper">
      <picture className="card-img-wrapper">
        <img src={cardImg} className="card-img" />
      </picture>

      <figcaption className="pictures-detail">
        <h3 className="name">{name}</h3>
        <p className="relation">
          <span className="butterfly-icon-wrapper">
            <img src="./images/butterfly.png" className="butterfly-icon" />
          </span>
          {relation}
        </p>
      </figcaption>
    </figure>
  );
}

export default Cards;
