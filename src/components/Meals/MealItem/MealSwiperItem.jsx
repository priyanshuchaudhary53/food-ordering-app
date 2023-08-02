import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../UI/Button";
import { cartActions } from "../../../store/cartSlice";

const truncate = (str, n) => {
  const arr = str.split(" ");
  arr.splice(n);
  const newstr = arr.join(" ");
  return newstr;
};

const MealSwiperItem = (props) => {
  const { name, price, id, description } = props;

  const [showFullDescription, setShowFullDescription] = useState(false);
  const dispatch = useDispatch();

  const shortDescription = truncate(description, 8) + " ...";

  const toggleButtonHandler = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  const amount = 1;

  const addButtonHandler = () => {
    dispatch(cartActions.addItem({ id, name, amount, price }));
  };

  return (
    <div className="border border-slate-300 rounded-md p-4 flex flex-col gap-4">
      <div>
        <h3 className="text-md md:text-lg font-[600] md:font-medium tracking-tight">
          {name}
        </h3>
        <h4 className="">₹ {price}</h4>
      </div>
      <div className="text-sm">
        {showFullDescription ? description : shortDescription}{" "}
        <button onClick={toggleButtonHandler} className="text-green-400">
          {showFullDescription ? "Hide" : "More"}
        </button>
      </div>
      <div className="flex">
        <Button
          bgcolor="bg-green-400"
          textcolor="text-white"
          onClick={addButtonHandler}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default MealSwiperItem;
