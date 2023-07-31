import { Watch } from "react-loader-spinner";

import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const OrderPlaced = ({ setOrderPlaced }) => {
  const navigate = useNavigate();
  const homeButtonHandler = () => {
    navigate("/");
    setOrderPlaced(false);
  };
  return (
    <div className="min-h-[60vh] mt-10 mb-4 flex justify-center items-center flex-col">
      <div className="-mt-10 text-3xl md:text-4xl font-bold tracking-tight mb-6 md:mb-8">
        Thank You
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
      <Button
        textcolor="text-white"
        bgcolor="bg-black"
        onClick={homeButtonHandler}
      >
        Go To Home
      </Button>
    </div>
  );
};

export default OrderPlaced;
