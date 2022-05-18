/* Exercitiul 2- Crearea unei componente care
 sa afiseze numele si un mesaj ca acesta este colorat */
import PropTypes from "prop-types";
import { useState } from "react";

const DisplayName = (props) => {
  const [favoriteColor, setFavoriteColor] = useState(false);
  const toggleColor = () => setFavoriteColor(!favoriteColor);

  return (
    <div className="name-container">
      <div className="name-tag">
        <h1>
          <strong
            className={`span-name ${favoriteColor ? "favorite-color" : ""}`}
            onClick={toggleColor}
          >
            {props.name}
          </strong>
        </h1>
        {!favoriteColor ? (
          <h3>ANGULAR DEVELOPER</h3>
        ) : (
          <h3>Acest nume este colorat</h3>
        )}
      </div>
    </div>
  );
};

DisplayName.propType = {
  name: PropTypes.string,
};

DisplayName.defaultProps = {
  name: "Guest",
};
export default DisplayName;
