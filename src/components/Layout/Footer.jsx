import FooterMenu from "./FooterMenu";

const MENU_ONE = [
  { id: "fm1_1", name: "About", link: "#" },
  { id: "fm1_2", name: "Careers", link: "#" },
  { id: "fm1_3", name: "Team", link: "#" },
  { id: "fm1_4", name: "Blog", link: "#" },
];

const MENU_TWO = [
  { id: "fm2_1", name: "Help & Support", link: "#" },
  { id: "fm2_2", name: "Partner with us", link: "#" },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <footer className="bg-black text-white py-14 md:py-24 px-4 flex justify-center items-center">
        <div className="w-full sm:w-[90%] md:w-[80%] xl:w-[70%] grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <h1 className="text-5xl font-bold tracking-tight">
              eat<span className="text-green-500">on</span>
            </h1>
            <p className="text-sm md:text-base text-gray-400 mt-1 mb-4">
              © Copyright {year} EatOn Technologies Inc.
            </p>
          </div>
          <div className="md:col-span-1">
            <FooterMenu heading="Company" items={MENU_ONE} />
          </div>
          <div className="md:col-span-1">
            <FooterMenu heading="Contact" items={MENU_TWO} />
          </div>
        </div>
      </footer>
      <div className="py-2 px-4 bg-green-400 text-center tracking-tight text-sm font-medium">
        <p>
          Made with 🖤 by{" "}
          <a
            className="underline underline-offset-2"
            href="https://github.com/priyanshuchaudhary53"
          >
            Priyanshu
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
