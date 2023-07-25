import CartButton from "./CartButton";

const Navbar = (props) => {
  const { showCart } = props;
  return (
    <nav className="bg-gray-100 border-b-4 border-green-500 py-2 px-4 flex justify-center items-center drop-shadow-md sticky top-0 z-50">
      <div className="w-full sm:w-[90%] md:w-[80%] xl:w-[70%] mt-2 mb-2 md:mt-3 md:mb-3 lg:mt-4 lg:mb-4 flex justify-between">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          eat<span className="text-green-500">on</span>
        </h1>
        <div className="">
          <CartButton showCart={showCart} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
