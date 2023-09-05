import "./Equipment.jsx";
import PropTypes from "prop-types";

export function Equipment(props) {
  return (
    <div className="equipment">
      <span>{props.equipment}</span>
    </div>
  );
}

Equipment.propTypes = {
  equipment: PropTypes.string.isRequired,
};
