import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../utils/CartContext";

const CartButton = (props) => {
  const { showCart } = props;

  const cartCtx = useContext(CartContext);

  const numberOfItem = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <button
      className="bg-green-400 flex relative py-2 px-6 rounded-full"
      onClick={showCart}
    >
      <span className="mr-2">
        <CartIcon />
      </span>
      <span className="font-medium mr-1">Cart</span>
      <span className="absolute -right-1 -top-2 bg-slate-900 w-6 h-6 rounded-full font-[500] text-white">
        {numberOfItem}
      </span>
    </button>
  );
};

export default CartButton;
