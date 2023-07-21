import { useContext } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartContext from "../../utils/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { hideCart } = props;

  const cartCtx = useContext(CartContext);

  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className="overflow-auto max-h-[250px] pr-2">
      {cartCtx.items.map((item) => (
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

      {hasItems && cartItems}

      {hasItems > 0 ? (
        <>
          <hr className="mt-8" />
          <div className="mt-5 flex ">
            <div className="w-full font-bold">Sub total</div>
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

      <div className="flex flex-row justify-end gap-4 mt-8">
        <Button textcolor="text-white" bgcolor="bg-black" onClick={hideCart}>
          Close
        </Button>
        {hasItems && (
          <Button textcolor="text-black" bgcolor="bg-green-400">
            Checkout
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
