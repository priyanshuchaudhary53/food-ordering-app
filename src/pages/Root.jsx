import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Cart from "../components/Cart/Cart";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  const [cartShown, setCartShown] = useState(false);

  const location = useLocation();

  const isCheckoutPage = location.pathname == "/checkout";

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };

  let classes = "px-4 flex justify-center py-[50px]";

  if (isCheckoutPage) {
    classes = "px-4 flex justify-center py-[50px] bg-gray-100";
  }

  return (
    <>
      <Header showCart={showCartHandler} />
      <main className={classes}>
        <div className="w-full sm:w-[90%] md:w-[80%] xl:w-[70%]">
          <Outlet />
        </div>
      </main>
      {cartShown && <Cart hideCart={hideCartHandler} />}
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default RootLayout;
