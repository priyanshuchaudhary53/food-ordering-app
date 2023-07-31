import { Link } from "react-router-dom";

import Button from "../UI/Button";
import foodImage from "../../assets/food-on-table.png";

const EmptyCart = () => {
  return (
    <div className="h-[78vh] flex justify-center items-center">
      <div className="text-center">
        <img
          className="mx-auto -mt-10 md:-mt-16 w-[250px] md:w-[300px]"
          src={foodImage}
        />
        <h1 className=" text-xl font-bold">Your cart is empty</h1>
        <p className="text-sm mt-1">
          You can go to home page to view more items
        </p>
        <div className="flex justify-center mt-6">
          <Link to="/">
            <Button bgcolor="bg-black" textcolor="text-white" typeButton={true}>
              HOMEPAGE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
