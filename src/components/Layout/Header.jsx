import Navbar from "./Navbar";
import Hero from "./Hero";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const { showCart } = props;

  const location = useLocation();

  const isHomepage = location.pathname == "/";

  return (
    <>
      <Navbar showCart={showCart} />
      {isHomepage && <Hero />}
    </>
  );
};

export default Header;
