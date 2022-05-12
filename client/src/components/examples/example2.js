import Bottle from "../bottle";

const Example2 = () => {
  return (
    <div className="example">
      Example 2 - Reuse Components
      <div className="d-flex">
        <Bottle liquidColor="red" etiquette="Red" />
        <Bottle liquidColor="yellow" etiquette="Yellow" />
        <Bottle liquidColor="green" etiquette="Green" />
      </div>
    </div>
  );
};

export default Example2;
