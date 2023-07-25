import { forwardRef, useState } from "react";

const Input = forwardRef((props, ref) => {
  const { label, input } = props;

  const [amount, setAmount] = useState(1);

  const incrementHandler = () => {
    if (amount < input.max) {
      setAmount(amount + 1);
    }
  };

  const decrementHandler = () => {
    if (amount > input.min) {
      setAmount(amount - 1);
    }
  };

  return (
    <div>
      <label htmlFor={input.id} className="hidden">
        {label}
      </label>
      <div className="w-[110px] bg-white flex justify-between items-center rounded-md border border-slate-300 drop-shadow-sm">
        <span
          className="text-2xl cursor-pointer px-3 py-[2px]"
          onClick={decrementHandler}
        >
          -
        </span>
        <span className="text-lg text-green-400 font-medium">{amount}</span>
        <span
          className="text-2xl cursor-pointer px-3 py-[2px]"
          onClick={incrementHandler}
        >
          +
        </span>
      </div>
      <input ref={ref} type="hidden" id={input.id} value={amount} />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
