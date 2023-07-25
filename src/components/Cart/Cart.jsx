import { useContext, useState } from "react";

import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartContext from "../../utils/CartContext";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import { ThreeDots, Watch } from "react-loader-spinner";

const Cart = (props) => {
  const { hideCart } = props;

  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className="overflow-auto max-h-[160px] pr-2">
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

  const checkoutButtonHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://react-http-2aaae-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          body: JSON.stringify({ user: userData, orderItem: cartCtx.items }),
        }
      );
      if (!response.ok) {
        throw new Error("Somthing went wrong!");
      }
    } catch (err) {
      alert(err);
    }

    setIsSubmitting(false);
    setDidSubmit(true);

    cartCtx.clearCart();
  };

  const loader = (
    <div className="flex justify-center mt-14 mb-8 md:mb-4">
      <ThreeDots
        height="50"
        width="50"
        radius="9"
        color="#4ADE80"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );

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

      {isCheckout && !isSubmitting && (
        <CheckoutForm onSubmit={submitOrderHandler} onCancel={hideCart} />
      )}

      {isCheckout && isSubmitting && loader}

      {!isCheckout && !didSubmit && modalActions}
    </>
  );

  const orderConfirmText = (
    <div className="mt-10 mb-4 flex justify-center items-center flex-col">
      <div className="text-3xl md:text-4xl font-bold tracking-tight mb-6 md:mb-8">
        Thank You{" "}
      </div>
      <Watch
        height="40"
        width="40"
        radius="48  "
        color="#4ADE80"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
      <div className="text-xl md:text-2xl text-black font-medium tracking-tight mt-2">
        Order Placed
      </div>
      <div className="text-center mb-4 md:mb-6">
        Your order will be delivered soon.
      </div>
      <Button textcolor="text-white" bgcolor="bg-black" onClick={hideCart}>
        Close
      </Button>
    </div>
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

      {didSubmit ? orderConfirmText : cartItemsDiv}
    </Modal>
  );
};

export default Cart;
