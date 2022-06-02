import { useEffect, useState } from "react";

const Legend = ({ data, hexColors }) => {
  const [legendPieces, setLegendPieces] = useState("");

  useEffect(() => {
    if (data) {
      const legendData = [];
      Object.entries(data.answers).forEach(([key, value]) => {
        legendData.push(
          <div key={key} className="legend-piece">
            <div
              className="square"
              style={{
                backgroundColor: hexColors.find((color) => color.value === key)
                  .hexValue,
              }}
            ></div>
            <div> {key} </div>
          </div>
        );
      });
      setLegendPieces(legendData);
    }
  }, [data, hexColors]);

  return <div className="legend-container">{legendPieces}</div>;
};

export default Legend;
