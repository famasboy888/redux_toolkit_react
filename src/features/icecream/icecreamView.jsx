import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../icecream/iceCreamSlice";
import { useState } from "react";

export const IcecreamView = () => {
  const [value, setValue] = useState(1);

  const numOfIceCream = useSelector((state) => {
    return state.iceCream.numOfIceCream;
  });

  const dispatch = useDispatch();

  const orderIcecreamHandler = (qty) => {
    dispatch(ordered(qty));
  };

  const restockIcecreamHandler = (qty) => {
    dispatch(restocked(qty));
  };

  return (
    <div>
      <h2>Number of Icecreams - {numOfIceCream}</h2>
      <button
        onClick={() => {
          orderIcecreamHandler(1);
        }}
      >
        Order Icecream
      </button>
      <input
      type="number"
        value={value}
        onChange={(e) => {
          setValue(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          restockIcecreamHandler(value);
        }}
      >
        Restock Icecream
      </button>
    </div>
  );
};
