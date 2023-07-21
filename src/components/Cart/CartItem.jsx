import TrashIcon from "./TrashIcon";

const CartItem = (props) => {
  const { name, amount, price, onRemove } = props;
  return (
    <li className="first:mt-0 mt-2">
      <div className="flex text-sm">
        <div className="w-full font-[600] text-black">
          {name} x {amount}
          <span className="inline ml-1 cursor-pointer" onClick={onRemove}>
            <TrashIcon />
          </span>
        </div>
        <div className="w-[60px] font-medium text-gray-600 text-right">
          ₹ {amount * price}
        </div>
      </div>
    </li>
  );
};

export default CartItem;
