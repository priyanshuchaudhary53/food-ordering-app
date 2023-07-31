import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

import SidebarContent from "./SidebarContent";
import CheckoutForm from "../Checkout/CheckoutForm";
import { cartActions } from "../../store/cartSlice";

const Checkout = ({ setOrderPlaced }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://react-http-2aaae-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          body: JSON.stringify({ user: userData, orderItem: cartItems }),
        }
      );
      if (!response.ok) {
        throw new Error("Somthing went wrong!");
      }
    } catch (err) {
      alert(err);
    }

    setIsSubmitting(false);
    setOrderPlaced(true);

    dispatch(cartActions.clearCart());
  };

  return (
    <div className="min-h-[60vh]">
      <div className="flex gap-6 md:gap-8 flex-col-reverse md:flex-row">
        <div className="w-full md:w-[65%]">
          <div className="bg-white p-6 shadow-sm">
            <CheckoutForm
              onSubmit={submitOrderHandler}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
        <div className="w-full md:w-[35%]">
          <div className="bg-white p-6 shadow-sm">
            <SidebarContent cartItems={cartItems} totalAmount={totalAmount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
