import BarPiece from "./BarPiece";
import { useState, useEffect } from "react";

const Bar = ({ total, data, hexColors }) => {
  const [processedData, setProcessedData] = useState("");
  const BAR_LENGTH = 700;

  useEffect(() => {
    if (data) {
      const barData = [];
      Object.entries(data.answers).forEach(([key, value]) => {
        const barLength = (value * BAR_LENGTH) / total;
        barData.push(
          <BarPiece
            key={key}
            value={key}
            length={barLength}
            hexColor={hexColors.find((color) => color.value === key).hexValue}
          />
        );
      });
      setProcessedData(barData);
    }
  }, [data, total, hexColors]);

  return <div className="bar-container">{processedData}</div>;
};

export default Bar;
