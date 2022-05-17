import { useState } from "react";

// Ex3 - Formular-ul care trimite culoarea.
const AddColorCodeForm = (props) => {
  const [colorCode, setColorCode] = useState("#ffffff");

  const handleClick = () => {
    props.handleClick({ colorCode });
  };
  return (
    <>
      <div className="buttons-container">
        <input
          type="color"
          value={colorCode}
          onChange={(e) => setColorCode(e.target.value)}
        ></input>
        <button className="add-button" onClick={handleClick}>
          Add
        </button>
      </div>
    </>
  );
};

export default AddColorCodeForm;
