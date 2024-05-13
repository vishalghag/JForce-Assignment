/* eslint-disable react/prop-types */
const CommponInput = ({
  inputType,
  inputPlaceholder,
  inputError,
  inputRef,
  monitorState,
  inputValue,
}) => {
  return (
    <div className="flex flex-col md:items-center m-3 p-3 mt-1  items-start">
      <input
        className=" w-full mt-3 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 md:w-[700px]"
        type={inputType}
        placeholder={inputPlaceholder}
        ref={inputRef}
        onChange={monitorState}
        value={inputValue}
      />
      <span className="text-red-500 text-sm mt-1">{inputError}</span>
    </div>
  );
};

export default CommponInput;
