import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cartSlice";
import CheckoutItem from "./CheckoutItem";

const SidebarContent = (props) => {
  const { cartItems, totalAmount } = props;

  const dispatch = useDispatch();

  const gst = (totalAmount * 5) / 100;
  const toPay = Math.round(totalAmount + gst);

  const cartItemRemoveHandler = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  const CartItemsList = (
    <ul>
      {cartItems.map((item) => (
        <CheckoutItem
          id={item.id}
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
    <>
      <div className="mb-4">
        <h1 className="text-3xl font-bold tracking-tight">
          eat<span className="text-green-500">on</span>
        </h1>
        <p className="text-gray-600 text-sm font-medium tracking-tighter">
          Gomti Nagar
        </p>
        <hr className="mt-3" />
      </div>
      <div className="mt-6">
        {CartItemsList}
        <hr className="mt-6" />
      </div>
      <div className="mt-4 text-sm">
        <div className="font-medium">Bill details</div>
        <div className="flex justify-between mt-3">
          <div>Item total</div>
          <div>{`₹${totalAmount}`}</div>
        </div>
        <div className="flex justify-between mt-2">
          <div>GST</div>
          <div>{`₹${gst.toFixed(2)}`}</div>
        </div>
      </div>
      <div className="mt-6 text-sm">
        <hr className="h-[2px] bg-gray-400 border-0" />
        <div className="mt-6 font-bold flex justify-between mb-2">
          <div>TO PAY</div>
          <div>{`₹${toPay}`}</div>
        </div>
      </div>
    </>
  );
};

export default SidebarContent;
