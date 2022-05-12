import { useState } from "react";

const AddBottleForm = (props) => {
  const [etiquette, setEtiquette] = useState("");
  const [liquidColor, setLiquidColor] = useState("#000000");

  const handleClick = () => {
    props.handleClick({ liquidColor, etiquette });
  };

  const updateEtiquette = (event) => {
    setEtiquette(event.target.value);
  };

  return (
    <>
      <input type="text" value={etiquette} onChange={updateEtiquette}></input>
      <input
        type="color"
        value={liquidColor}
        onChange={(e) => setLiquidColor(e.target.value)}
      ></input>
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default AddBottleForm;
