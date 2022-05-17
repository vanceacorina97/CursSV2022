/* Ex3 - Afiseaza culorile si codurile lor + 
construieste un patrat din culorile respective  */
import PropTypes from "prop-types";
const DisplayFormCode = (props) => {
  const onRemoveColorElClick = () => {
    props.handleRemove(props.id);
  };
  return (
    <div style={{ color: props.colorCode.toString() }}>
      <div className="color-box">
        {props.colorCode}
        <div className="remove-button">
          {props.handleRemove && <div onClick={onRemoveColorElClick}>X</div>}
        </div>
      </div>
    </div>
  );
};

DisplayFormCode.propTypes = {
  colorCode: PropTypes.string,
};

DisplayFormCode.defaultProps = {
  colorCode: "#ffffff",
};

export default DisplayFormCode;
