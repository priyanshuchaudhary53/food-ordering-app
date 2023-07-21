import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = (props) => {
  const { showCart } = props;
  return (
    <>
      <Navbar showCart={showCart} />
      <Hero />
    </>
  );
};

export default Header;
