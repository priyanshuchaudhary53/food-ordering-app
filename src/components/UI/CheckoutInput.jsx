import { useState } from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cartSlice";

const CheckoutInput = (props) => {
  const { input, label, itemId } = props;

  const dispatch = useDispatch();

  const [amount, setAmount] = useState(input.amount);

  const incrementHandler = () => {
    if (amount < input.max) {
      setAmount(amount + 1);
      dispatch(cartActions.increaseItem(itemId));
    }
  };

  const decrementHandler = () => {
    if (amount > input.min) {
      setAmount(amount - 1);
      dispatch(cartActions.reduceItem(itemId));
    }
  };
  return (
    <div>
      <label htmlFor={input.id} className="hidden">
        {label}
      </label>
      <div className="w-[85px] bg-white flex justify-between items-center rounded-sm border border-slate-300 drop-shadow-sm">
        <span
          className="text-xl cursor-pointer px-3 py-[1px]"
          onClick={decrementHandler}
        >
          -
        </span>
        <span className="text-md text-green-400 font-medium">{amount}</span>
        <span
          className="text-xl cursor-pointer px-3 py-[1px] text-green-400"
          onClick={incrementHandler}
        >
          +
        </span>
      </div>
      <input type="hidden" id={input.id} value={amount} />
    </div>
  );
};

export default CheckoutInput;
