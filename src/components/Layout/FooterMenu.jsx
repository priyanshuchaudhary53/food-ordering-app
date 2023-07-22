const FooterMenu = (props) => {
  const { heading, items } = props;

  const itemList = items.map((item) => {
    return (
      <li
        key={item.id}
        className="mt-3 first:mt-0 text-gray-400 tracking-tight font-medium"
      >
        <a href={item.link}>{item.name}</a>
      </li>
    );
  });

  return (
    <>
      <h2 className="text-xl tracking-tight font-bold">{heading}</h2>
      <ul className="mt-3">{itemList}</ul>
    </>
  );
};

export default FooterMenu;
