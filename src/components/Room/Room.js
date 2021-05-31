import React from "react";
import './Room.css'
import { Link } from "react-router-dom";
import defaultImg from "../../images/defaultImg.jpg";
import PropTypes from "prop-types";

export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="Kierunek wakacji" />
        <div className="price-top">
          <h6>{price}zł</h6>
          <p>za dzień</p>
        </div>
        <Link to={`/wycieczki/${slug}`} className="btn-primary room-link">
          Więcej
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
