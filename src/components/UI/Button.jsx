const Button = (props) => {
  const { bgcolor, textcolor, children, onClick, typeButton } = props;
  const classes =
    "flex justify-center py-2 px-8 rounded-full shadow-md font-medium " +
    textcolor +
    " " +
    bgcolor;
  return (
    <button type={typeButton && "button"} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
