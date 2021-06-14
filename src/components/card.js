import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export function Card(props) {
  const priceIcon = Number(props.price);

  const showPrice = () => {
    return priceIcon === 1 ? (
      <p className="icons">★☆☆☆☆ </p>
    ) : priceIcon === 2 ? (
      <p className="icons">★★☆☆☆</p>
    ) : priceIcon === 3 ? (
      <p className="icons">★★★☆☆</p>
    ) : (
      <p className="icons">★★★★☆</p>
    );
  };

  return (
    <div className="card">
      <div className="card-info">
        <img src={props.photo} alt="hotel" className="card-image" />
        <div className="card-text">
          <div className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icons" />
            <p>
              {props.city}, {props.country}
            </p>
          </div>
          <h3>{props.name} </h3>
          <div> {showPrice()} </div>
          <div className="rooms">
            <FontAwesomeIcon icon={faBed} className="icons" />
            <p>{props.rooms} habitaciones disponibles </p>
          </div>

          <p className="description">{props.description}</p>
        </div>
      </div>
      <button className="cardBtn"> Reservar Ahora </button>
    </div>
  );
}
