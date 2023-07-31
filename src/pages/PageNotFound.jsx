import { useNavigate } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Button from "../components/UI/Button";

const PageNotFound = () => {
  const navigate = useNavigate();
  const homeButtonHandler = () => {
    navigate("/");
  };
  return (
    <>
      <Header />
      <div className="min-h-[80vh] text-center flex justify-center items-center p-4">
        <div>
          <div className=" text-6xl font-bold tracking-tight">Oops!</div>
          <h1 className="text-xl mt-4 font-medium tracking-tight">
            Page not found
          </h1>
          <p className="text-md mt-1 max-w-full w-[450px]">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
          <div className="flex mt-8 justify-center">
            <Button
              bgcolor="bg-green-400"
              textcolor="text-black"
              onClick={homeButtonHandler}
            >
              GO TO HOME
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFound;
