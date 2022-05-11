import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Bottle = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const onRemoveBottleClick = () => {
    props.handleRemove(props.id);
  };

  if (props.withLoading && !loaded) return <div>loading...</div>;

  return (
    <div className={`bottle-container${open ? " open" : ""}`}>
      <div className="cap-out" onClick={toggleOpen}></div>
      <div className="bottle-neck"></div>
      <div className="cap-in"></div>
      <div className="bottle"></div>
      <div
        className="liquid"
        style={{ backgroundColor: props.liquidColor }}
      ></div>
      <div className="etiquette">{props.etiquette}</div>
      {props.handleRemove && (
        <div onClick={onRemoveBottleClick} className="remove-bottle">
          X
        </div>
      )}
    </div>
  );
};

Bottle.propTypes = {
  liquidColor: PropTypes.string,
  etiquette: PropTypes.string,
};

Bottle.defaultProps = {
  liquidColor: "transparent",
  etiquette: "Nothing",
};

export default Bottle;

/*
  const toggleOpen = ...

  <div id="cap-out" className="cap-out"></div>

  document.getElementById("cap-out").addEventListener('click', toggleOpen)

*/
