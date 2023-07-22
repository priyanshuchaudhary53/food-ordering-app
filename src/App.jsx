import { useState } from "react";

import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./utils/CartProvider";
import Footer from "./components/Layout/Footer";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <CartProvider>
      <Header showCart={showCartHandler} />
      <main className="p-4 flex justify-center pb-[100px]">
        <div className="w-full sm:w-[85%] md:w-[75%] xl:w-[60%]">
          <Meals />
        </div>
      </main>
      {cartShown && <Cart hideCart={hideCartHandler} />}
      <Footer />
    </CartProvider>
  );
}

export default App;
