const TextInput = (props) => {
  const {
    id,
    placeholder,
    value,
    onChange,
    onBlur,
    valid,
    errorLabel = `${placeholder} can not be empty`,
  } = props;

  let inputClasses = "";
  let labelClasses = "";
  if (valid) {
    inputClasses =
      "peer border w-full font-medium border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none placeholder-transparent";
    labelClasses =
      "text-xs text-gray-600 absolute left-[5px] -top-[8px] bg-white px-2 py-0 transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-[8px] peer-focus:bg-white peer-focus:text-gray-600 peer-focus:text-xs";
  } else {
    inputClasses =
      "peer border w-full font-medium border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none placeholder-transparent";
    labelClasses =
      "text-xs text-red-400 absolute left-[5px] -top-[8px] bg-white px-2 py-0 transition-all peer-placeholder-shown:text-red-400 peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-[8px] peer-focus:bg-white peer-focus:text-red-400 peer-focus:text-xs";
  }
  return (
    <div className="relative mt-4">
      <input
        type="text"
        className={inputClasses}
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={id} className={labelClasses}>
        {valid ? placeholder : errorLabel}
      </label>
    </div>
  );
};

export default TextInput;
