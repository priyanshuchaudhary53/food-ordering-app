import { useRef } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const { id, onAddToCart } = props;
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const selectedAmount = amountInputRef.current.value;
    const selectedAmountNum = +selectedAmount;
    if (selectedAmountNum < 1) {
      return;
    }
    onAddToCart(selectedAmountNum);
  };
  return (
    <form className="flex flex-row gap-4 md:flex-col md:gap-3">
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "20",
        }}
      />
      <Button
        bgcolor="bg-green-400"
        textcolor="text-white"
        onClick={submitHandler}
      >
        Add
      </Button>
    </form>
  );
};

export default MealItemForm;
