import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../cake/cakeSlice";

export const CakeView = () => {
  const numOfCakes = useSelector((state) => {
    return state.cake.numOfCake;
  });

  const dispatch = useDispatch();

  const orderCakeHandler = (qty) => {
    dispatch(ordered(qty));
  };

  const restockCakeHandler = (qty) => {
    dispatch(restocked(qty));
  };

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button
        onClick={() => {
          orderCakeHandler(1);
        }}
      >
        Order cake
      </button>
      <button
        onClick={() => {
          restockCakeHandler(1);
        }}
      >
        Restock cake
      </button>
    </div>
  );
};
