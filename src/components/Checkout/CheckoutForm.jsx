import Button from "../UI/Button";
import TextInput from "../UI/TextInput";
import useInput from "../../hooks/useInput";
import { ThreeDots } from "react-loader-spinner";

const isEmpty = (val) => val.trim() === "";
const isNotPincode = (val) => val.trim().length !== 6;

const CheckoutForm = (props) => {
  const { onSubmit, isSubmitting } = props;

  const {
    value: enteredNameValue,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameInputReset,
    setIsTouched: nameInputIsTouched,
  } = useInput(isEmpty);

  const {
    value: enteredHouseNoValue,
    isValid: enteredHouseNoIsValid,
    hasError: houseNoInputHasError,
    valueChangeHandler: houseNoChangeHandler,
    valueBlurHandler: houseNoBlurHandler,
    reset: houseNoInputReset,
    setIsTouched: houseNoInputIsTouched,
  } = useInput(isEmpty);

  const {
    value: enteredAreaValue,
    isValid: enteredAreaIsValid,
    hasError: areaInputHasError,
    valueChangeHandler: areaChangeHandler,
    valueBlurHandler: areaBlurHandler,
    reset: areaInputReset,
    setIsTouched: areaInputIsTouched,
  } = useInput(isEmpty);

  const {
    value: enteredPincodeValue,
    isValid: enteredPincodeIsValid,
    hasError: pincodeInputHasError,
    valueChangeHandler: pincodeChangeHandler,
    valueBlurHandler: pincodeBlurHandler,
    reset: pincodeInputReset,
    setIsTouched: pincodeInputIsTouched,
  } = useInput(isNotPincode);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredHouseNoIsValid &&
    enteredAreaIsValid &&
    enteredPincodeIsValid
  ) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    nameInputIsTouched(true);
    houseNoInputIsTouched(true);
    areaInputIsTouched(true);
    pincodeInputIsTouched(true);

    if (!formIsValid) {
      return;
    }

    onSubmit({
      name: enteredNameValue,
      house: enteredHouseNoValue,
      area: enteredAreaValue,
      pincode: enteredPincodeValue,
    });

    nameInputReset();
    houseNoInputReset();
    areaInputReset();
    pincodeInputReset();
  };

  const Loader = (
    <div className="">
      <ThreeDots
        height="40"
        width="40"
        radius="9"
        color="#4ADE80"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );

  return (
    <div className="mt-2 mb-2">
      <div className=" text-md tracking-tight font-bold">
        Enter delivery address
      </div>
      <form onSubmit={confirmHandler}>
        <TextInput
          id="name"
          placeholder="Name"
          value={enteredNameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          valid={!nameInputHasError}
        />
        <TextInput
          id="houseno"
          placeholder="Flat / House no."
          value={enteredHouseNoValue}
          onChange={houseNoChangeHandler}
          onBlur={houseNoBlurHandler}
          valid={!houseNoInputHasError}
        />
        <TextInput
          id="area"
          placeholder="Area"
          value={enteredAreaValue}
          onChange={areaChangeHandler}
          onBlur={areaBlurHandler}
          valid={!areaInputHasError}
        />
        <TextInput
          id="pincode"
          placeholder="Pincode"
          value={enteredPincodeValue}
          onChange={pincodeChangeHandler}
          onBlur={pincodeBlurHandler}
          valid={!pincodeInputHasError}
          errorLabel="Pincode should be 6 digit only"
        />

        <div className="flex flex-row items-center justify-end gap-4 mt-8">
          {isSubmitting && Loader}
          <div>
            <Button bgcolor="bg-green-400" textcolor="text-black">
              Order
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
