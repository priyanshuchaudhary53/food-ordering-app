import { useDispatch } from "react-redux";

import MealItemForm from "./MealItemForm";
import { cartActions } from "../../../store/cartSlice";

function MealItem(props) {
  const { id, name, price, description } = props;

  const dispatch = useDispatch();

  const addItemToCartHandler = (amount) => {
    dispatch(cartActions.addItem({ id, name, amount, price }));
  };

  return (
    <li className="border-b border-slate-300 last:border-b-0 mt-8 first:mt-2 pb-6 last:pb-0 grid grid-cols-10 gap-4 md:gap-2">
      <div className="col-span-10 md:col-span-8">
        <h3 className="text-md md:text-xl font-[600] md:font-medium tracking-tight">
          {name}
        </h3>
        <h4>₹ {price}</h4>
        <p className="text-sm mt-2 md:mt-4">{description}</p>
      </div>
      <div className="col-span-10 md:col-span-2 md:flex md:justify-center">
        <MealItemForm id={id} onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
