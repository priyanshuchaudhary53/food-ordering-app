import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";

import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const { hideCart } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalAmount = useSelector(
    (state) => `₹${state.cart.totalAmount.toFixed(2)}`
  );
  const cartItems = useSelector((state) => state.cart.items);

  const hasItems = cartItems.length > 0;

  const cartItemRemoveHandler = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  const cartItemsUl = (
    <ul className="overflow-auto max-h-[160px] pr-2">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const checkoutButtonHandler = () => {
    hideCart();
    navigate("/checkout");
  };

  const modalActions = (
    <div className="flex flex-row justify-end gap-4 mt-8">
      <Button textcolor="text-white" bgcolor="bg-black" onClick={hideCart}>
        Close
      </Button>
      {hasItems && (
        <Button
          textcolor="text-black"
          bgcolor="bg-green-400"
          onClick={checkoutButtonHandler}
        >
          Checkout
        </Button>
      )}
    </div>
  );

  const cartItemsDiv = (
    <>
      {hasItems && cartItemsUl}

      {hasItems > 0 ? (
        <>
          <hr className="mt-8" />
          <div className="mt-5 -mb-4 flex">
            <div className="w-full">
              <p className=" font-bold">Sub total</p>
              <p className="text-xs">Extra charges may apply</p>
            </div>
            <div className="w-[150px] text-right font-bold pr-2">
              {totalAmount}
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="text-4xl font-bold text-gray-400">Cart Empty</p>
          <p className="mt-4 font-medium text-gray-700 mb-14">
            Good food is always cooking!
            <br /> Go ahead, order some yummy items.
          </p>
        </>
      )}

      {modalActions}
    </>
  );

  return (
    <Modal onClose={hideCart}>
      <div className="mb-4">
        <h1 className="text-4xl md:text-4xl font-bold tracking-tight">
          eat<span className="text-green-500">on</span>
        </h1>
        <p className="text-gray-600 font-medium tracking-tighter">
          Gomti Nagar
        </p>
      </div>

      <hr className="mb-8" />

      {cartItemsDiv}
    </Modal>
  );
};

export default Cart;
