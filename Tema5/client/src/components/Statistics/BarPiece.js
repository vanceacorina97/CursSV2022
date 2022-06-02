const BarPiece = ({ value, length, hexColor }) => {
  return (
    <div
      className="bar-piece"
      style={{ width: length, backgroundColor: hexColor }}
    ></div>
  );
};

export default BarPiece;
