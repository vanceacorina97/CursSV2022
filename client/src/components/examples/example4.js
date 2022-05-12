import { useState } from "react";
import AddBottleForm from "../add_bottle_form";
import Bottle from "../bottle";

const Example4 = () => {
  const [bottles, setBottles] = useState([
    { id: 0, liquidColor: "pink", etiquette: "Fairy" },
  ]);

  const addBottle = (bottle) => {
    const newBottles = [...bottles];
    bottle.id = bottles.length;

    newBottles.push(bottle);

    setBottles(newBottles);
  };

  const removeBottle = (id) => {
    const newBottles = bottles.filter((bottle) => bottle.id !== id);

    setBottles(newBottles);
  };

  return (
    <div className="example">
      Example 4
      <br />
      <AddBottleForm handleClick={addBottle} />
      <br />
      <div className="d-flex">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} {...bottle} handleRemove={removeBottle} />
        ))}
      </div>
    </div>
  );
};

export default Example4;
