import { useState } from "react";
import { useSelector } from "react-redux";

import PageHeading from "../components/Layout/PageHeading";
import EmptyCart from "../components/Checkout/EmptyCart";
import Checkout from "../components/Checkout/Checkout";
import OrderPlaced from "../components/Checkout/OrderPlaced";

const CheckoutPage = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const cartEmpty = cartItems.length === 0;
  return (
    <>
      {cartEmpty && !orderPlaced && <EmptyCart />}
      {!cartEmpty && !orderPlaced && (
        <>
          <PageHeading title="Checkout" />
          <Checkout setOrderPlaced={setOrderPlaced} />
        </>
      )}
      {orderPlaced && <OrderPlaced setOrderPlaced={setOrderPlaced} />}
    </>
  );
};

export default CheckoutPage;
