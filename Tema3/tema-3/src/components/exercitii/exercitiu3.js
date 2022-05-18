/*
Avem nevoie de:
1. array de culori
2. metode Add si Remove
3. Optional: metoda de setare gradient
4. Componenta formular culoare
5. Componenta pentru afisarea culorii
*/
import { useState } from "react";
import AddColorCodeForm from "../add-color-code-form";
import DisplayFormCode from "../display-form-code";

const Exercitiu3 = () => {
  const [colors, setColors] = useState([]);

  const addColorCode = (newColor) => {
    const newColors = [...colors];
    newColor.id = colors.length;
    newColors.push(newColor);
    setColors(newColors);
  };

  const removeColor = (id) => {
    const updateColors = colors.filter((removeColor) => removeColor.id !== id);
    setColors(updateColors);
  };

  const setGradientColor = () => {
    const updateColors = colors
      .map((newColor) => newColor.colorCode)
      .toString();
    switch (colors.length) {
      case 0:
        return "#ffffff";
      case 1:
        return updateColors;
      default:
        return `linear-gradient(${updateColors})`;
    }
  };
  return (
    <div className="exercitiu">
      <div>Exercitiu 3 - Input Culoare</div>
      <AddColorCodeForm handleClick={addColorCode} />
      <br />
      <div className="d-flex">
        <div className="gradient-content">
          <span>Gradient Result</span>
          <div
            className="gradient-box"
            style={{ background: `${setGradientColor()}` }}
          ></div>
        </div>
        {colors.map((colorEl) => (
          <DisplayFormCode
            key={colorEl.id}
            {...colorEl}
            handleRemove={removeColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Exercitiu3;
