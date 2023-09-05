import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Card.scss";

function Card({ picture, title, href }) {
  return (
    <NavLink to={href} className="card">
      <div className="card__container">
        <img
          src={picture}
          alt="logement"
          className="card__container__picture"
        />
        <div className="card__container__title">
          <span className="card__container__title__span">{title}</span>
        </div>
      </div>
    </NavLink>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Card;
