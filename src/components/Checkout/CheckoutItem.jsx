import CheckoutInput from "../UI/CheckoutInput";

const CheckoutItem = (props) => {
  const { name, amount, price, id } = props;

  return (
    <li className="first:mt-0 mt-4">
      <div className="w-full grid grid-cols-4 gap-2 text-sm">
        <div className="col-span-2 md:col-span-3 2xl:col-span-2 font-normal text-black flex items-center">
          {name}
        </div>
        <div className="col-auto md:col-span-2 2xl:col-auto md:order-last 2xl:order-none flex items-center">
          <CheckoutInput
            label="Amount"
            itemId={id}
            input={{
              id: "amount_" + id,
              amount: amount,
              type: "number",
              min: "0",
              max: "20",
            }}
          />
        </div>
        <div className="col-auto md:col-span-1 2xl:col-auto font-normal text-gray-600 text-right flex items-center justify-end">
          ₹ {amount * price}
        </div>
      </div>
    </li>
  );
};

export default CheckoutItem;
